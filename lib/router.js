Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function(){ return Meteor.subscribe('posts');}
});

Router.map(function(){
	this.route('posts_list', {path: '/'});
});

Router.onBeforeAction('loading');