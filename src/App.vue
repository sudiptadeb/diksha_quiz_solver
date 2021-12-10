<template>
  <div>
    <div class="is-flex is-flex-direction-column is-align-items-center is-justify-content-space-evenly">
      <div class="is-flex is-flex-direction-column is-align-items-start is-justify-content-start">
        <label for="loadfile" class="tag">Search course</label>
        <div class="field has-addons">
          <div class="control">
            <input class="input" autofocus v-model="search_text" @keyup.enter="searchCourse"/>
          </div>
          <div class="control">
            <button class="button" title="search course by name" @click="searchCourse" :disabled="search_text.length<3">🔍</button>
            <button class="button" title="Upload ecar file" @click="$refs.load_file.click()">⤴️</button>
            <input class="input" type="file" ref="load_file" accept="application/json" id="loadfile" style="display: none"
                   @change="handleFileChange"/>
          </div>
        </div>
      </div>
    </div>
    <div id="app" class="is-flex is-flex-direction-column gap-1">
      <div v-if="!question_data" class="is-hoverable is-flex is-flex-direction-column ">
        <a class="p-2 is-pointer" v-for="(course,i) in course_list" :key="i" @click="select_course(course)">
          <p>{{ course.name }}</p>
        </a>
      </div>
      <ul v-if="question_data" class="is-flex is-flex-direction-column ">
        <li class="question" v-for="(ques,i) in question_data" :key="i">
          <p class="">{{ get_question(ques) }}</p>
          <ol class="options">
            <li class="option" :class="opt.isCorrect?'is-success':''" v-for="opt in get_options(ques)"
                :key="opt.$$hashKey">{{ removeTags(opt.text) }}
            </li>
          </ol>
        </li>
      </ul>
      <div v-else-if="course_list.length<=0" class="is-flex is-flex-direction-column ">
        <div class="question" v-for="(val,k) in file_data" :key="k">
          <a v-if="flag_filter && filter_keys(k)" @click="select_key(k)">
            {{ k }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import readFile from "js-file-reader/dist/js-file-reader";
import axios from 'axios';
import {unzip} from 'unzipit';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      search_text: "",
      course_list: [],
      file_data: {},
      flag_filter: true,
      question_data: undefined,
      // default_key: 'theme.stage[0].org.ekstep.questionset[0].data.__cdata'
    }
  },
  methods: {
    filter_keys: function (k) {
      // console.log(k);
      return /^.*(org\.ekstep\.questionset)(\[[0-9]+])?(\.data\.__?cdata)?$/.test(k)
    },
    xmlToJson: function (str) {
      // console.log('Converting: ', str);
      let convert = require('xml-js');
      let json_data = convert.xml2json(str, {compact: true, spaces: 0});
      // console.log('Converted json: ', json_data);
      return json_data;

    },
    decodeHTMLEntities: function (str) {
      var element = document.createElement('div');
      if (str && typeof str === 'string') {
        // strip script/html tags
        str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
        str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
        element.innerHTML = str;
        str = element.textContent;
        element.textContent = '';
      }

      return str;
    },
    removeTags: function (str) {
      if ((str === null) || (str === ''))
        return false;
      else
        str = str.toString();
      // Regular expression to identify HTML tags in
      // the input string. Replacing the identified
      // HTML tag with a null string.
      return this.decodeHTMLEntities(str.replace(/(<([^>]+)>)/ig, ''));
    },
    get_question: function (ques_data) {
      let text = ques_data.body.data.data.question.text;
      return this.removeTags(text);
    },
    get_options: function (ques_data) {
      return ques_data.body.data.data.options;
    },
    traverseCourse: function (id) {
      console.log('Traversing course id: ', id);
      let findQuiz = function (child) {
        if (child.primaryCategory === "Course Assessment") {
          console.log("Course Assessment found, ", child);
          return child.artifactUrl;
        }
        let artifact_url = "";
        if (child.children) {
          child.children.every(c => {
            artifact_url = findQuiz(c);
            return artifact_url === "";
          });
        }
        return artifact_url;
      }

      axios.get("https://diksha.gov.in/api/course/v1/hierarchy/" + id).then(res => {
        let quiz_zip = findQuiz(res.data.result.content);
        console.log('Assessment link', quiz_zip);
        // if (quiz_zip === "" || quiz_zip.indexOf('quiz_') === -1) {
        if (quiz_zip === "") {
          console.log('Failed to find quiz: ' + quiz_zip);
          alert('Course does not contain quiz');
        } else {
          unzip(quiz_zip).then(zipinfo => {
            if (!zipinfo.entries['/index.json']) {
              console.log('index.json not present');
              if (!zipinfo.entries['/index.ecml']) {
                console.log('index.ecml also not present');
                alert('Currently this course format is not supported, this this course name to me!')
              }
              console.log('index.ecml present, converting it into json')
              zipinfo.entries['/index.ecml'].text().then(
                  xml_data => {
                    let json_data = JSON.parse(this.xmlToJson(xml_data));
                    this.file_data = Object.flatten(json_data);
                    console.log('Flattened json: ', this.file_data);
                    this.select_keys();
                  }
              );
            } else {
              console.log('index.json present, parsing it')
              zipinfo.entries['/index.json'].json().then(
                  json_data => {
                    this.file_data = Object.flatten(json_data);
                    this.select_keys();
                  }
              );
            }
          });
        }
      })
    },
    select_course: function (course) {
      console.log('Course selected: ', course.identifier, ' ', course.name);
      this.traverseCourse(course.identifier);
    },
    select_keys: function () {
      let keys = Object.keys(this.file_data).filter(this.filter_keys);
      keys.every(key => {
        !this.select_key(key);
      })
    },
    select_key: function (key) {
      console.log('Key selected: ', key);
      let ques_set_data = this.file_data[key];
      try {
        let parsed_data = JSON.parse(ques_set_data);
        parsed_data.forEach(q => {
          q.body = JSON.parse(q.body);
        })
        this.question_data = parsed_data;
        return true;
      } catch (e) {
        this.question_data = undefined;
        return false;
      }

    },
    searchCourse: function () {
      console.log('Searching :', this.search_text);
      this.question_data = undefined;
      axios.post('https://diksha.gov.in/api/content/v1/search?orgdetails=orgName,email',
          {
            "request": {
              "filters": {
                "channel": "ORG_001",
                "primaryCategory": ["Course"],
                // "primaryCategory": ["Collection", "Resource", "Content Playlist", "Course", "Course Assessment", "Digital Textbook", "eTextbook", "Explanation Content", "Learning Resource", "Lesson Plan Unit", "Practice Question Set", "Teacher Resource", "Textbook Unit", "LessonPlan", "FocusSpot", "Learning Outcome Definition", "Curiosity Questions", "MarkingSchemeRubric", "ExplanationResource", "ExperientialResource", "Practice Resource", "TVLesson", "Course Unit"],
                "visibility": ["Default", "Parent"]
              },
              "limit": 100,
              "query": this.search_text,
              "fields": ["name", "appIcon", "mimeType", "gradeLevel", "identifier", "medium", "pkgVersion", "board", "subject", "resourceType", "primaryCategory", "contentType", "channel", "organisation", "trackable"],
              "softConstraints": {"badgeAssertions": 98, "channel": 100},
              "mode": "soft",
              "facets": ["se_boards", "se_gradeLevels", "se_subjects", "se_mediums", "primaryCategory"],
              "offset": 0
            }
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(res => {
            this.course_list = res.data.result.content
          })
          .catch(e => window.alert('Error searching'));
    },
    handleFileChange: function (evt) {
      let files = evt.target.files; // FileList object
      let first_file = files[0]
      if (first_file) {
        console.log('Handling file: ', first_file.name);
        readFile(first_file).then(result => {
          result[0].blob.text().then(r => {
            this.file_data = Object.flatten(JSON.parse(r));
            this.select_keys();
          })
        });
      }
    }
  },
  mounted() {
    Object.flatten = function (data) {
      var result = {};

      function recurse(cur, prop) {
        if (Object(cur) !== cur) {
          result[prop] = cur;
        } else if (Array.isArray(cur)) {
          for (var i = 0, l = cur.length; i < l; i++)
            recurse(cur[i], prop + "[" + i + "]");
          if (l == 0)
            result[prop] = [];
        } else {
          var isEmpty = true;
          for (var p in cur) {
            isEmpty = false;
            recurse(cur[p], prop ? prop + "." + p : p);
          }
          if (isEmpty && prop)
            result[prop] = {};
        }
      }

      recurse(data, "");
      return result;
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  max-width: 600px;
  margin: 0 auto;
}

.gap-1 {
  gap: 1em;
  padding: 1em;
}

li.question, li.option {
  margin: .5em 1em;
}

.option.is-success {
  color: green;
  font-weight: bold;
}

.option.is-success:before {
  content: ' ✅ ';
  padding: 0 0.5em;
}

.is-pointer:hover {
  font-weight: bold;
  cursor: pointer;
}


</style>
