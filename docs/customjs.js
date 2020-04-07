console.log("amp-script here"); 
<style type='text/css'>
	.embeddedServiceHelpButton .helpButton .uiButton {
		background-color: #005290;
		font-family: "Salesforce Sans", sans-serif;
	}
	.embeddedServiceHelpButton .helpButton .uiButton:focus {
		outline: 1px solid #005290;
	}
	@font-face {
		font-family: 'Salesforce Sans';
		src: url('https://www.sfdcstatic.com/system/shared/common/assets/fonts/SalesforceSans/SalesforceSans-Regular.woff') format('woff'),
		url('https://www.sfdcstatic.com/system/shared/common/assets/fonts/SalesforceSans/SalesforceSans-Regular.ttf') format('truetype');
	}
</style>

<!-- Start of Invitations -->
<div class="embeddedServiceInvitation" id="snapins_invite"  aria-live="assertive" role="dialog" aria-atomic="true">
	<div class="embeddedServiceInvitationHeader" aria-labelledby="snapins_titletext" aria-describedby="snapins_bodytext">
        <img id="embeddedServiceAvatar"/>
		<span class="embeddedServiceTitleText" id="snapins_titletext">Need help?</span>
		<button type="button" id="closeInvite" class="embeddedServiceCloseIcon" aria-label="Exit invitation">&times;</button>
	</div>
	<div class="embeddedServiceInvitationBody">
		<p id="snapins_bodytext">How can we help you?</p>
	</div>
	<div class="embeddedServiceInvitationFooter" aria-describedby="snapins_bodytext">
		<button type="button" class="embeddedServiceActionButton" id="rejectInvite">Close</button>
		<button type="button" class="embeddedServiceActionButton" id="acceptInvite">Start Chat</button>
	</div>
</div>

<style type='text/css'>
	#snapins_invite { background-color: #FFFFFF; font-family: "Salesforce Sans", sans-serif; overflow: visible; border-radius: 8px; visibility: hidden; }
	.embeddedServiceInvitation { background-color: transparent; max-width: 290px; max-height: 210px; -webkit-box-shadow: 0 7px 12px rgba(0,0,0,0.28); -moz-box-shadow: 0 7px 12px rgba(0,0,0,0.28); box-shadow: 0 7px 12px rgba(0,0,0,0.28); }
	@media only screen and (min-width: 48em) { /*mobile*/ .embeddedServiceInvitation { max-width: 332px; max-height: 210px; } }
	.embeddedServiceInvitation > .embeddedServiceInvitationHeader { width: inherit; height: 32px; line-height: 32px; padding: 10px; color: #FFFFFF; background-color: #222222; overflow: initial; display: flex; justify-content: space-between; align-items: stretch; border-top-left-radius: 8px; border-top-right-radius: 8px; }
	.embeddedServiceInvitationHeader #embeddedServiceAvatar { width: 32px; height: 32px; border-radius: 50%; }
	.embeddedServiceInvitationHeader .embeddedServiceTitleText { font-size: 18px; color: #FFFFFF; overflow: hidden; word-wrap: normal; white-space: nowrap; text-overflow: ellipsis; align-self: stretch; flex-grow: 1; max-width: 100%; margin: 0 12px; }
	.embeddedServiceInvitationHeader .embeddedServiceCloseIcon { border: none; border-radius: 3px; cursor: pointer; position: relative; bottom: 3%; background-color: transparent; width: 32px; height: 32px; font-size: 23px; color: #FFFFFF; }
	.embeddedServiceInvitationHeader .embeddedServiceCloseIcon:focus { outline: none; }
	.embeddedServiceInvitationHeader .embeddedServiceCloseIcon:focus::before { content: " "; position: absolute; top: 11%; left: 7%; width: 85%; height: 85%; background-color: rgba(255, 255, 255, 0.2); border-radius: 4px; pointer-events: none; }
	.embeddedServiceInvitationHeader .embeddedServiceCloseIcon:active, .embeddedServiceCloseIcon:hover { background-color: #FFFFFF; color: rgba(0,0,0,0.7); opacity: 0.7; }
	.embeddedServiceInvitation > .embeddedServiceInvitationBody { background-color: #FFFFFF; max-height: 110px; min-width: 260px; margin: 0 8px; font-size: 14px; line-height: 20px; overflow: auto; }
	.embeddedServiceInvitationBody p { color: #333333; padding: 8px; margin: 12px 0; }
	.embeddedServiceInvitation > .embeddedServiceInvitationFooter { width: inherit; color: #FFFFFF; text-align: right; background-color: #FFFFFF; padding: 10px; max-height: 50px; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; }
	.embeddedServiceInvitationFooter > .embeddedServiceActionButton { font-size: 14px; max-height: 40px; border: none; border-radius: 4px; padding: 10px; margin: 4px; text-align: center; text-decoration: none; display: inline-block; cursor: pointer; }
	.embeddedServiceInvitationFooter > #acceptInvite { background-color: #005290; color: #FFFFFF; }
	.embeddedServiceInvitationFooter > #rejectInvite { background-color: #FFFFFF; color: #005290; }
    .embeddedServiceSidebarExtendedHeader .agentAvatarsContainer,
.embeddedServiceSidebarExtendedHeader .content .message { display:none; }
</style>

<script type='text/javascript'>
	(function() {
		document.getElementById('closeInvite').onclick = function() { embedded_svc.inviteAPI.inviteButton.rejectInvite(); };
		document.getElementById('rejectInvite').onclick = function() { embedded_svc.inviteAPI.inviteButton.rejectInvite(); }; // use this API call to reject invitations
		document.getElementById('acceptInvite').onclick = function() { embedded_svc.inviteAPI.inviteButton.acceptInvite(); }; // use this API call to start chat from invitations
		document.addEventListener('keyup', function(event) { if (event.keyCode == 27) { embedded_svc.inviteAPI.inviteButton.rejectInvite(); }})
	})();
</script>
<!-- End of Invitations -->

<script type='text/javascript' src='https://service.force.com/embeddedservice/5.0/esw.min.js'></script>
<script type='text/javascript'>
	var initESW = function(gslbBaseURL) {
		embedded_svc.settings.displayHelpButton = true; //Or false
		embedded_svc.settings.language = ''; //For example, enter 'en' or 'en-US'
		embedded_svc.settings.autoOpenPostChat = true;
		//embedded_svc.settings.defaultMinimizedText = '...'; //(Defaults to Chat with an Expert)
		//embedded_svc.settings.disabledMinimizedText = '...'; //(Defaults to Agent Offline)

		//embedded_svc.settings.loadingText = ''; //(Defaults to Loading)
		//embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)

		// Settings for Chat
		//embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
			// Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
			// Returns a valid button ID.
		//};
		//embedded_svc.settings.prepopulatedPrechatFields = {}; //Sets the auto-population of pre-chat form fields
		//embedded_svc.settings.fallbackRouting = []; //An array of button IDs, user IDs, or userId_buttonId
		//embedded_svc.settings.offlineSupportMinimizedText = '...'; //(Defaults to Contact Us)

		embedded_svc.settings.enabledFeatures = ['LiveAgent'];
		embedded_svc.settings.entryFeature = 'LiveAgent';

		embedded_svc.init(
			'https://gianluca-dev-ed.my.salesforce.com',
			'https://gianlu-developer-edition.eu18.force.com/',
			gslbBaseURL,
			'00D0Y000001kEAn',
			'Chat_Agents',
			{
				baseLiveAgentContentURL: 'https://c.la1-c2-fra.salesforceliveagent.com/content',
				deploymentId: '5721n0000008jZI',
				buttonId: '5731n000000CrCj',
				baseLiveAgentURL: 'https://d.la1-c2-fra.salesforceliveagent.com/chat',
				eswLiveAgentDevName: 'Chat_Agents',
				isOfflineSupportEnabled: false
			}
		);
	};

	if (!window.embedded_svc) {
		var s = document.createElement('script');
		s.setAttribute('src', 'https://gianluca-dev-ed.my.salesforce.com/embeddedservice/5.0/esw.min.js');
		s.onload = function() {
			initESW(null);
		};
		document.body.appendChild(s);
	} else {
		initESW('https://service.force.com');
	}
</script>
