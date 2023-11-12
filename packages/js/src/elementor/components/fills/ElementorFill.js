// External dependencies.
import { Fill } from "@wordpress/components";
import { Fragment, useEffect } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { get } from "lodash";
import PropTypes from "prop-types";
import { InternalLinkingSuggestionsUpsell } from "../../../components/modals/InternalLinkingSuggestionsUpsell";

// Internal dependencies.
import CollapsibleCornerstone from "../../../containers/CollapsibleCornerstone";
import InsightsModal from "../../../insights/components/insights-modal";
import Alert from "../../containers/Alert";
import { KeywordInput, ReadabilityAnalysis, SeoAnalysis, InclusiveLanguageAnalysis } from "@yoast/externals/components";
import SidebarItem from "../../../components/SidebarItem";
import SearchAppearanceModal from "../../../components/modals/editorModals/SearchAppearanceModal";
import SocialAppearanceModal from "../../../components/modals/editorModals/SocialAppearanceModal";
import PremiumSEOAnalysisModal from "../../../components/modals/PremiumSEOAnalysisModal";
import SidebarCollapsible from "../../../components/SidebarCollapsible";
import SchemaTabContainer from "../../../containers/SchemaTab";
import AdvancedSettings from "../../../containers/AdvancedSettings";
import SEMrushRelatedKeyphrases from "../../../containers/SEMrushRelatedKeyphrases";
import WincherSEOPerformanceModal from "../../../containers/WincherSEOPerformanceModal";
import { isWordProofIntegrationActive } from "../../../helpers/wordproof";
import WordProofAuthenticationModals from "../../../components/modals/WordProofAuthenticationModals";
import WebinarPromoNotification from "../../../components/WebinarPromoNotification";
import { BlackFridaySidebarChecklistPromotion } from "../../../components/BlackFridaySidebarChecklistPromotion";
import { BlackFridayPromotion } from "../../../components/BlackFridayPromotion";
import { shouldShowWebinarPromotionNotificationInSidebar } from "../../../helpers/shouldShowWebinarPromotionNotification";
import KeywordUpsell from "../../../components/modals/KeywordUpsell";

/* eslint-disable complexity */
/**
 * Creates the ElementorFill component.
 *
 * @param {Object} props The props.
 *
 * @returns {wp.Element} The Sidebar component.
 *
 * @constructor
 */
export default function ElementorFill( { isLoading, onLoad, settings } ) {
	useEffect( () => {
		setTimeout( () => {
			if ( isLoading ) {
				onLoad();
			}
		} );
	} );

	if ( isLoading ) {
		return null;
	}

	const webinarIntroElementorUrl = get( window, "wpseoScriptData.webinarIntroElementorUrl", "https://yoa.st/webinar-intro-elementor" );
	const isWooCommerce = get( window, "wpseoScriptData.isWooCommerceActive", "" );

	return (
		<>
			{ isWordProofIntegrationActive() && <WordProofAuthenticationModals /> }
			<Fill name="YoastElementor">
				<SidebarItem renderPriority={ 1 }>
					<Alert />

					{ shouldShowWebinarPromotionNotificationInSidebar() &&
						<WebinarPromoNotification hasIcon={ false } image={ null } url={ webinarIntroElementorUrl } />
					}
					{ isWooCommerce && <BlackFridaySidebarChecklistPromotion hasIcon={ false } /> }
					<BlackFridayPromotion image={ null } hasIcon={ false } />

				</SidebarItem>
				{ settings.isKeywordAnalysisActive && <SidebarItem renderPriority={ 8 }>
					<KeywordInput
						isSEMrushIntegrationActive={ settings.isSEMrushIntegrationActive }
					/>
					{ ! window.wpseoScriptData.metabox.isPremium && <Fill name="YoastRelatedKeyphrases">
						<SEMrushRelatedKeyphrases />
					</Fill> }
				</SidebarItem> }
				<SidebarItem renderPriority={ 25 }>
					<SearchAppearanceModal />
				</SidebarItem>
				{ ( settings.useOpenGraphData || settings.useTwitterData ) && <SidebarItem key="social-appearance" renderPriority={ 26 }>
					<SocialAppearanceModal
						useOpenGraphData={ settings.useOpenGraphData }
						useTwitterData={ settings.useTwitterData }
					/>
				</SidebarItem> }
				{ settings.displaySchemaSettings && <SidebarItem renderPriority={ 28 }>
					<SidebarCollapsible
						title={ __( "Schema", "wordpress-seo" ) }
					>
						<SchemaTabContainer />
					</SidebarCollapsible>
				</SidebarItem> }
				{ settings.displayAdvancedTab && <SidebarItem renderPriority={ 29 }>
					<SidebarCollapsible
						title={ __( "Advanced", "wordpress-seo" ) }
					>
						<AdvancedSettings location="sidebar" />
					</SidebarCollapsible>
				</SidebarItem> }
				{ settings.isKeywordAnalysisActive && <SidebarItem renderPriority={ 10 }>
					<Fragment>
						<SeoAnalysis
							shouldUpsell={ settings.shouldUpsell }
							shouldUpsellWordFormRecognition={ settings.isWordFormRecognitionActive }
						/>
						{ settings.shouldUpsell && <PremiumSEOAnalysisModal /> }
					</Fragment>
				</SidebarItem> }
				{ settings.isContentAnalysisActive && <SidebarItem renderPriority={ 15 }>
					<ReadabilityAnalysis
						shouldUpsell={ settings.shouldUpsell }
					/>
				</SidebarItem> }
				{ settings.isInclusiveLanguageAnalysisActive && <SidebarItem renderPriority={ 19 }>
					<InclusiveLanguageAnalysis />
				</SidebarItem> }
				{ settings.isKeywordAnalysisActive && <SidebarItem key="additional-keywords-upsell" renderPriority={ 22 }>
					{ settings.shouldUpsell && <KeywordUpsell /> }
				</SidebarItem> }
				{ settings.shouldUpsell && <SidebarItem key="internal-linking-suggestions-upsell" renderPriority={ 23 }>
					<InternalLinkingSuggestionsUpsell />
				</SidebarItem> }
				{ settings.isKeywordAnalysisActive && settings.isWincherIntegrationActive &&
					<SidebarItem key="wincher-seo-performance" renderPriority={ 23 }>
						<WincherSEOPerformanceModal location="sidebar" shouldCloseOnClickOutside={ false } />
					</SidebarItem> }
				{ settings.isCornerstoneActive && <SidebarItem renderPriority={ 30 }>
					<CollapsibleCornerstone />
				</SidebarItem> }
				{ settings.isInsightsEnabled && <SidebarItem renderPriority={ 32 }>
					<InsightsModal location="elementor" />
				</SidebarItem> }
			</Fill>
		</>
	);
}

ElementorFill.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	onLoad: PropTypes.func.isRequired,
	settings: PropTypes.object.isRequired,
};
/* eslint-enable complexity */
