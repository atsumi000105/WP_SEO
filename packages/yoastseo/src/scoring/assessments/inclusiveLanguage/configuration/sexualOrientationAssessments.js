import { SCORES } from "./scores";
import { potentiallyHarmfulUnless } from "./feedbackStrings";

const sexualOrientationAssessments = [
	{
		identifier: "homosexuals",
		nonInclusivePhrases: [ "homosexuals" ],
		inclusiveAlternatives: "<i>gay people, queer people, lesbians, gay men, people in same-gender relationships</i>",
		score: SCORES.POTENTIALLY_NON_INCLUSIVE,
		feedbackFormat: [ potentiallyHarmfulUnless, "Be as specific possible and use people's preferred labels if they are known." ].join( " " ),
	},
];

sexualOrientationAssessments.forEach( assessment => {
	assessment.category = "sexualOrientation";
	assessment.learnMoreUrl = "https://yoa.st/inclusive-language-orientation";
} );

export default sexualOrientationAssessments;
