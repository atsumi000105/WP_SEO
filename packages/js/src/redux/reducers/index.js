import insights from "../../insights/redux/reducer";
import {
	LINK_PARAMS_NAME,
	linkParamsReducer,
	PLUGIN_URL_NAME,
	pluginUrlReducer,
	WISTIA_EMBED_PERMISSION_NAME,
	wistiaEmbedPermissionReducer,
} from "../../shared-admin/store";
import analysis from "../reducers/contentAnalysis";
import activeMarker from "./activeMarker";
import advancedSettings from "./advancedSettings";
import analysisData from "./analysisData";
import checklist from "./checklist";
import currentPromotions from "./currentPromotions";
import isCornerstone from "./cornerstoneContent";
import dismissedAlerts from "./dismissedAlerts";
import editorContext from "./editorContext";
import editorData from "./editorData";
import editorModals from "./editorModals";
import facebookEditor from "./facebookEditor";
import focusKeyword from "./focusKeyword";
import isPremium from "./isPremium";
import marksButtonStatus from "./markerButtons";
import isMarkerPaused from "./markerPauseStatus";
import postId from "./postId";
import preferences from "./preferences";
import primaryTaxonomies from "./primaryTaxonomies";
import schemaTab from "./schemaTab";
import SEMrushModal from "./SEMrushModal";
import SEMrushRequest from "./SEMrushRequest";
import settings from "./settings";
import shoppingData from "./shoppingData";
import snippetEditor from "./snippetEditor";
import twitterEditor from "./twitterEditor";
import warning from "./warning";
import WincherModal from "./WincherModal";
import WincherRequest from "./WincherRequest";
import WincherSEOPerformance from "./WincherSEOPerformance";

export default {
	activeMarker,
	advancedSettings,
	analysis,
	analysisData,
	checklist,
	currentPromotions,
	dismissedAlerts,
	editorContext,
	editorData,
	editorModals,
	facebookEditor,
	focusKeyword,
	insights,
	isCornerstone,
	isMarkerPaused,
	isPremium,
	[ LINK_PARAMS_NAME ]: linkParamsReducer,
	[ PLUGIN_URL_NAME ]: pluginUrlReducer,
	postId,
	marksButtonStatus,
	preferences,
	primaryTaxonomies,
	schemaTab,
	SEMrushModal,
	SEMrushRequest,
	settings,
	shoppingData,
	snippetEditor,
	twitterEditor,
	warning,
	WincherModal,
	WincherRequest,
	WincherSEOPerformance,
	[ WISTIA_EMBED_PERMISSION_NAME ]: wistiaEmbedPermissionReducer,
};
