var scorm = pipwerks.SCORM;  //Shortcut
var lmsConnected = false;

function iniciar() {
  lmsConnected = scorm.init();
  getterAllParams();
}
function terminar() {
  lmsConnected = scorm.quit();
}
function setter() {
  var label = document.forms["form"]["label"].value;
  var value = document.forms["form"]["value"].value;
  scorm.set(label, value);
  scorm.save();
}
function getter() {
  var label = document.forms["form"]["label"].value;
  var value = scorm.get(label);
  document.forms["form"]["value"].value = value;
}
function getterAllParams() {
  var scormTags = [
  "cmi.core._children",
  "cmi.core.student_id",
  "cmi.core.student_name",
  "cmi.core.lesson_location",
  "cmi.core.credit",
  "cmi.core.lesson_status",
  "cmi.core.entry",
  "cmi.core.score._children",
  "cmi.core.score.raw",
  "cmi.core.score.max",
  "cmi.core.score.min",
  "cmi.core.total_time",
  "cmi.core.lesson_mode",
  "cmi.core.exit",
  "cmi.core.session_time",
  "cmi.suspend_data",
  "cmi.launch_data",
  "cmi.comments",
  "cmi.comments_from_lms",
  "cmi.objectives._children",
  "cmi.objectives._count",
  "cmi.student_data._children",
  "cmi.student_data.mastery_score",
  "cmi.student_data.max_time_allowed",
  "cmi.student_data.time_limit_action",
  "cmi.student_preference._children",
  "cmi.student_preference.audio",
  "cmi.student_preference.language",
  "cmi.student_preference.speed",
  "cmi.student_preference.text",
  "cmi.interactions._children",
  "cmi.interactions._count"
  ];
  var scormTagsObjective = [
  "cmi.objectives.n.id",
  "cmi.objectives.n.score._children",
  "cmi.objectives.n.score.raw",
  "cmi.objectives.n.score.max",
  "cmi.objectives.n.score.min",
  "cmi.objectives.n.status"
  ];
  var scormTagsInteractions = [
  "cmi.interactions.n.correct_responses._count",
  "cmi.interactions.n.id",
  "cmi.interactions.n.objectives._count",
  "cmi.interactions.n.objectives.n.id",
  "cmi.interactions.n.time",
  "cmi.interactions.n.type",
  "cmi.interactions.n.correct_responses.n.pattern",
  "cmi.interactions.n.weighting",
  "cmi.interactions.n.student_response",
  "cmi.interactions.n.result",
  "cmi.interactions.n.latency"
  ];
  for (var i = 0; i < scormTags.length; i++) {
    var data = scorm.get(scormTags[i]);
    const para = document.createElement("p");
    const node = document.createTextNode(scormTags[i]+": "+data);
    para.appendChild(node);

    document.getElementById("output").appendChild(para);
  }
  for (var j = 0; j < 5; j++) {
    for (var i = 0; i < scormTagsObjective.length; i++) {
      var data = scorm.get(scormTagsObjective[i].replace(".n.", "."+j+"."));
      const para = document.createElement("p");
      const node = document.createTextNode(scormTagsObjective[i].replace(".n.", "."+j+".")+": "+data);
      para.appendChild(node);

      document.getElementById("output").appendChild(para);
    }
  }
  for (var j = 0; j < 10; j++) {
    for (var i = 0; i < scormTagsInteractions.length; i++) {
      var data = scorm.get(scormTagsInteractions[i].replace(".n.", "."+j+"."));
      const para = document.createElement("p");
      const node = document.createTextNode(scormTagsInteractions[i].replace(".n.", "."+j+".")+": "+data);
      para.appendChild(node);

      document.getElementById("output").appendChild(para);
    }
  }
}
function setterAllParams() {
  document.getElementById("output").innerHTML = "";

  var scormTags = [
  {"tag":"cmi.core._children","value":""},
  {"tag":"cmi.core.student_id","value":""},
  {"tag":"cmi.core.student_name","value":""},
  {"tag":"cmi.core.lesson_location","value":"1,2,3"},
  {"tag":"cmi.core.credit","value":""},
  {"tag":"cmi.core.lesson_status","value":"incompleted"},
  {"tag":"cmi.core.entry","value":""},
  {"tag":"cmi.core.score._children","value":""},
  {"tag":"cmi.core.score.raw","value":"50"},
  {"tag":"cmi.core.score.max","value":"100"},
  {"tag":"cmi.core.score.min","value":"20"},
  {"tag":"cmi.core.total_time","value":"1:25:45"},
  {"tag":"cmi.core.lesson_mode","value":""},
  {"tag":"cmi.core.exit","value":""},
  {"tag":"cmi.core.session_time","value":"1:25:45"},
  {"tag":"cmi.suspend_data","value":"1:25:45"},
  {"tag":"cmi.launch_data","value":""},
  {"tag":"cmi.comments","value":""},
  {"tag":"cmi.comments_from_lms","value":""},
  {"tag":"cmi.objectives._children","value":""},
  {"tag":"cmi.objectives._count","value":""},
  {"tag":"cmi.student_data._children","value":""},
  {"tag":"cmi.student_data.mastery_score","value":""},
  {"tag":"cmi.student_data.max_time_allowed","value":""},
  {"tag":"cmi.student_data.time_limit_action","value":""},
  {"tag":"cmi.student_preference._children","value":""},
  {"tag":"cmi.student_preference.audio","value":""},
  {"tag":"cmi.student_preference.language","value":""},
  {"tag":"cmi.student_preference.speed","value":""},
  {"tag":"cmi.student_preference.text","value":""},
  {"tag":"cmi.interactions._children","value":""},
  {"tag":"cmi.interactions._count","value":""},
  ];
  var scormTagsObjective = [
  {"tag":"cmi.objectives.n.id","value":"id_"},
  {"tag":"cmi.objectives.n.score._children","value":""},
  {"tag":"cmi.objectives.n.score.raw","value":"50"},
  {"tag":"cmi.objectives.n.score.max","value":"100"},
  {"tag":"cmi.objectives.n.score.min","value":"10"},
  {"tag":"cmi.objectives.n.status","value":"incompleted"}
  ];
  var scormTagsInteractions = [
  {"tag":"cmi.interactions.n.correct_responses._count","value":""},
  {"tag":"cmi.interactions.n.id","value":"id_i_"},
  {"tag":"cmi.interactions.n.objectives._count","value":""},
  {"tag":"cmi.interactions.n.objectives.n.id","value":"1"},
  {"tag":"cmi.interactions.n.time","value":"1:25:45"},
  {"tag":"cmi.interactions.n.type","value":"choice"},
  {"tag":"cmi.interactions.n.correct_responses.n.pattern","value":"1"},
  {"tag":"cmi.interactions.n.weighting","value":"50"},
  {"tag":"cmi.interactions.n.student_response","value":"res"},
  {"tag":"cmi.interactions.n.result","value":"correct"},
  {"tag":"cmi.interactions.n.latency","value":"2"}
  ];
  for (var i = 0; i < scormTags.length; i++) {
    scorm.set(scormTags[i]["tag"], scormTags[i]["value"]);
  }
  for (var j = 0; j < 5; j++) {
    for (var i = 0; i < scormTagsObjective.length; i++) {
      scorm.set(scormTagsObjective[i]["tag"].replace(".n.", "."+j+"."), scormTagsObjective[i]["value"]+""+j);
    }
  }
  for (var j = 0; j < 10; j++) {
    for (var i = 0; i < scormTagsInteractions.length; i++) {
      scorm.set(scormTagsInteractions[i]["tag"].replace(".n.", "."+j+"."), scormTagsInteractions[i]["value"]+""+j);
    }
  }


  getterAllParams();
}