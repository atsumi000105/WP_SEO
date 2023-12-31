import { shallow } from "enzyme";
import { noop } from "lodash";
import React from "react";
import SEMrushCountrySelector from "../../../js/src/components/modals/SEMrushCountrySelector";

jest.mock( "@wordpress/api-fetch", () => ( {
	__esModule: true,
	"default": () => ( { response: {} } ),
} ) );

window.jQuery = () => ( { on: noop } );

describe( "SEMrushCountrySelector", () => {
	it( "successfully calls the associated newRequest function when the select country button is clicked", () => {
		const onClickMock = jest.fn();
		const component = shallow( <SEMrushCountrySelector
			setCountry={ noop } newRequest={ onClickMock } setNoResultsFoundnewRequest={ noop }
			setRequestSucceeded={ noop } setRequestLimitReached={ noop } setRequestFailed={ noop } setNoResultsFound={ noop }
		/> );

		component.find( "#yoast-semrush-country-selector-button" ).simulate( "click" );

		expect( onClickMock ).toHaveBeenCalled();
	} );
	it( "successfully calls the associated setCountry function when the selected option has changed", () => {
		const setCountryMock = jest.fn();
		const component = shallow( <SEMrushCountrySelector
			setCountry={ setCountryMock } newRequest={ noop } setNoResultsFoundnewRequest={ noop }
			setRequestSucceeded={ noop } setRequestLimitReached={ noop } setRequestFailed={ noop } setNoResultsFound={ noop }
		/> );

		component.find( "#yoast-semrush-country-selector-select" ).simulate( "change" );

		expect( setCountryMock ).toHaveBeenCalled();
	} );
} );
