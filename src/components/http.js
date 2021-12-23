var t = "1007c6b2a15afe074fe9cbc6862a0f4498b0b000";

class item {
	id;
	title;
	checked;
	description;
	constructor (id, title, checked, description){
		this.id = id;
		this.title = title;
		this.checked = checked;
		this.description = description;
	}
}
class adapter{
content;
description;
completed
constructor(item){
	this.content = item.title;
	this.completed = item.checked;
	this.description = item.description;
}
}

 function http(url, token, body, type){
	
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.open(type, url, false);
	xmlHttp.setRequestHeader("Authorization", "Bearer " + token);
	xmlHttp.setRequestHeader("Content-Type", "application/json");
	xmlHttp.send(body);
	return xmlHttp.responseText;
}

export function getTasks(){
try{
	var temp = JSON.parse(http("https://api.todoist.com/rest/v1/tasks", t, null, "GET"));
	var arr = new Array(temp.length);
	for(var i = 0; i < temp.length; i++){
		arr[i] = new item(temp[i].id, temp[i].content, temp[i].completed, temp[i].description);
	}
}
catch(e){
	alert("Error getting tasks: " + e);
	arr = new Array(0);
}
return arr;
}

export function delTask(id){
	var res;
	try{
	http("https://api.todoist.com/rest/v1/tasks/" + id, t, null, "DELETE");
	res = "ok";
	}
	catch(e){
		alert("Error deleting task: " + e);
		res = "err";
	}
	return res;
}
//delTask(5435755579);

export function addTask(item){
	var res;
	try{
		console.log(item);
		res = JSON.parse( http("https://api.todoist.com/rest/v1/tasks", t, JSON.stringify(new adapter(item)), "POST"));
	}
	catch(e){
		alert("Error adding task: " + e);
		res = null;
	}
	return res;
}

export function closeItem(id, action){
	var res;
	try{
		res = http("https://api.todoist.com/rest/v1/tasks/" + id + "/" + action, t, null, "POST");
	}
	catch(e){
		alert(e);
		res = "err";
	}
	return res;	
}


	