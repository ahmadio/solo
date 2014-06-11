Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function(){ return Meteor.subscribe('posts');}
});

Router.map(function(){
	this.route('posts_list', {path: '/'});

	this.route('post_page', {
		path: '/posts/:_id',
		data: function() { return Posts.findOne(this.params._id);}
	})
});

Router.onBeforeAction('loading');