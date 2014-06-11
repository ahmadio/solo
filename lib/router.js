Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading'
});

Router.map(function(){
	this.route('posts_list', {path: '/'});
});

Router.onBeforeAction('loading');