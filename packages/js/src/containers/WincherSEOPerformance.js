/* External dependencies */
import { withDispatch, withSelect } from "@wordpress/data";
import { compose } from "@wordpress/compose";

/* Internal dependencies */
import WincherSEOPerformance from "../components/WincherSEOPerformance";

export default compose( [
	withSelect( ( select ) => {
		const {
			isWincherNewlyAuthenticated,
			getWincherKeyphraseLimitReached,
			getWincherLimit,
			getWincherHistoryDaysLimit,
			getWincherLoginStatus,
			getWincherRequestIsSuccess,
			getWincherRequestResponse,
			getWincherTrackableKeyphrases,
			getWincherTrackedKeyphrases,
			getWincherAllKeyphrasesMissRanking,
			getWincherPermalink,
			shouldWincherAutomaticallyTrackAll,
		} = select( "yoast-seo/editor" );

		return {
			keyphrases: getWincherTrackableKeyphrases(),
			trackedKeyphrases: getWincherTrackedKeyphrases(),
			allKeyphrasesMissRanking: getWincherAllKeyphrasesMissRanking(),
			isLoggedIn: getWincherLoginStatus(),
			isNewlyAuthenticated: isWincherNewlyAuthenticated(),
			isSuccess: getWincherRequestIsSuccess(),
			keyphraseLimitReached: getWincherKeyphraseLimitReached(),
			limit: getWincherLimit(),
			response: getWincherRequestResponse(),
			shouldTrackAll: shouldWincherAutomaticallyTrackAll(),
			permalink: getWincherPermalink(),
			historyDaysLimit: getWincherHistoryDaysLimit(),
		};
	} ),
	withDispatch( ( dispatch ) => {
		const {
			setWincherWebsiteId,
			setWincherRequestSucceeded,
			setWincherRequestFailed,
			setWincherTrackingForKeyphrase,
			setWincherSetKeyphraseLimitReached,
			setWincherLoginStatus,
		} = dispatch( "yoast-seo/editor" );

		return {
			setRequestSucceeded: ( response ) => {
				setWincherRequestSucceeded( response );
			},
			setRequestFailed: ( response ) => {
				setWincherRequestFailed( response );
			},
			addTrackedKeyphrase: ( keyphraseObject ) => {
				setWincherTrackingForKeyphrase( keyphraseObject );
			},
			setKeyphraseLimitReached: ( limit ) => {
				setWincherSetKeyphraseLimitReached( limit );
			},
			onAuthentication: ( status, newlyAuthenticated, websiteId ) => {
				setWincherWebsiteId( websiteId );
				setWincherLoginStatus( status, newlyAuthenticated );
			},
		};
	} ),
] )( WincherSEOPerformance );
