$(document).ready(function(){
	$("#contactForm").validate({
		rules: {
			name: {
				required: true,
				minimumLength: 2
			},
			email: {
				required: true,
				email: true
			},
			message: {
				required: true,
				minimumLength: 10
			}
		},
		messages: {
			name: {
				required: "Please enter your name",
				minimumLength: "Your name seems a bit short doesn't it?"
			},
			email: {
				required: "Please enter your email address",
				email: "Please enter a valid email address"
			},
			message: {
				required: "Please enter a message",
				minimumLength: "Your message is too short. Please enter atleast 10 characters."
			}
		}
	});
});
