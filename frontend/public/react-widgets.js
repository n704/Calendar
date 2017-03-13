import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "rw-btn": {
        "color": "#333",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": 2.286,
        "display": "inline-block",
        "textAlign": "center",
        "verticalAlign": "middle",
        "background": "none",
        "backgroundImage": "none",
        "border": "1px solid transparent",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "whiteSpace": "nowrap",
        "cursor": "pointer"
    },
    "rw-input": {
        "color": "#555",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "height": 2.286,
        "paddingTop": 0.429,
        "paddingRight": 0.857,
        "paddingBottom": 0.429,
        "paddingLeft": 0.857,
        "backgroundColor": "#fff"
    },
    "buttonrw-input": {
        "overflow": "visible",
        "textTransform": "none",
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "selectrw-input": {
        "textTransform": "none"
    },
    "html input[type=\"button\"]rw-input": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "input[type=\"reset\"]rw-input": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "input[type=\"submit\"]rw-input": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "button[disabled]rw-input": {
        "cursor": "not-allowed"
    },
    "html input[disabled]rw-input": {
        "cursor": "not-allowed"
    },
    "buttonrw-input::-moz-focus-inner": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "inputrw-input::-moz-focus-inner": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "rw-i": {
        "display": "inline-block",
        "fontFamily": "RwWidgets",
        "fontStyle": "normal",
        "fontWeight": "normal",
        "lineHeight": 1,
        "fontVariant": "normal",
        "textTransform": "none",
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "rw-i-caret-down:before": {
        "content": "'\\e803'"
    },
    "rw-i-caret-up:before": {
        "content": "'\\e800'"
    },
    "rw-i-caret-left:before": {
        "content": "'\\e801'"
    },
    "rw-i-caret-right:before": {
        "content": "'\\e802'"
    },
    "rw-i-clock-o:before": {
        "content": "'\\e805'"
    },
    "rw-i-calendar:before": {
        "content": "'\\e804'"
    },
    "rw-i-search:before": {
        "content": "'\\e806'"
    },
    "rw-sr": {
        "position": "absolute",
        "width": 1,
        "height": 1,
        "marginTop": -1,
        "marginRight": -1,
        "marginBottom": -1,
        "marginLeft": -1,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "overflow": "hidden",
        "clip": "rect(0, 0, 0, 0)",
        "border": 0
    },
    "rw-widget": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "outline": 0,
        "MozBackgroundClip": "border-box",
        "WebkitBackgroundClip": "border-box",
        "backgroundClip": "border-box",
        "position": "relative",
        "backgroundColor": "#fff",
        "border": "#ccc 1px solid",
        "borderRadius": 4
    },
    "rw-widget *": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "rw-widget:before": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "rw-widget *:before": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "rw-widget:after": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "rw-widget *:after": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "rw-rtl": {
        "direction": "rtl"
    },
    "rw-input[disabled]": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "cursor": "not-allowed",
        "opacity": 1,
        "backgroundColor": "#eee",
        "borderColor": "#ccc"
    },
    "rw-input[readonly]": {
        "cursor": "not-allowed"
    },
    "rw-filter-input": {
        "position": "relative",
        "width": "100%",
        "paddingRight": 1.9,
        "border": "#ccc 1px solid",
        "borderRadius": 4,
        "marginBottom": 2
    },
    "rw-rtl rw-filter-input": {
        "paddingLeft": 1.9,
        "paddingRight": 0
    },
    "rw-filter-input>rw-input": {
        "width": "100%",
        "border": "none",
        "outline": "none"
    },
    "rw-filter-input>span": {
        "marginTop": -2
    },
    "rw-irw-loading": {
        "background": "url(\"../img/loading.gif\") no-repeat center",
        "width": 16,
        "height": "100%"
    },
    "rw-irw-loading:before": {
        "content": ""
    },
    "rw-loading-mask": {
        "borderRadius": 4,
        "position": "relative"
    },
    "rw-loading-mask:after": {
        "content": "''",
        "background": "url(\"../img/loader-big.gif\") no-repeat center",
        "position": "absolute",
        "backgroundColor": "#fff",
        "opacity": 0.7,
        "top": 0,
        "left": 0,
        "height": "100%",
        "width": "100%"
    },
    "rw-now": {
        "fontWeight": "600"
    },
    "rw-state-focus": {
        "backgroundColor": "#fff",
        "border": "#66afe9 1px solid",
        "color": "#333"
    },
    "rw-state-selected": {
        "backgroundColor": "#adadad",
        "border": "#adadad 1px solid",
        "color": "#333"
    },
    "rw-state-disabled": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "cursor": "not-allowed",
        "opacity": 1
    },
    "rw-dropdownlist": {
        "cursor": "pointer",
        "paddingRight": 1.9
    },
    "rw-btn[disabled]": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "pointerEvents": "none",
        "cursor": "not-allowed",
        "filter": "alpha(opacity=65)",
        "opacity": 0.65
    },
    "rw-state-disabled rw-btn": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "pointerEvents": "none",
        "cursor": "not-allowed",
        "filter": "alpha(opacity=65)",
        "opacity": 0.65
    },
    "rw-state-readonly rw-btn": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "pointerEvents": "none",
        "cursor": "not-allowed",
        "filter": "alpha(opacity=65)",
        "opacity": 0.65
    },
    "ulrw-list": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingLeft": 0,
        "listStyle": "none",
        "paddingTop": 5,
        "paddingRight": 0,
        "paddingBottom": 5,
        "overflow": "auto",
        "outline": 0,
        "height": "100%"
    },
    "rw-selectlist": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingLeft": 2,
        "listStyle": "none",
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "overflow": "auto",
        "outline": 0,
        "height": "100%"
    },
    "ulrw-list>li": {
        "WebkitTouchCallout": "none",
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none"
    },
    "rw-selectlist>li": {
        "WebkitTouchCallout": "none",
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none"
    },
    "ulrw-list>lirw-list-optgroup": {
        "fontWeight": "bold"
    },
    "rw-selectlist>lirw-list-optgroup": {
        "fontWeight": "bold"
    },
    "ulrw-list>lirw-list-option": {
        "paddingLeft": 10,
        "paddingRight": 10,
        "cursor": "pointer",
        "border": "1px solid transparent",
        "borderRadius": 3
    },
    "ulrw-list>lirw-list-empty": {
        "paddingLeft": 10,
        "paddingRight": 10
    },
    "rw-selectlist>lirw-list-option": {
        "paddingLeft": 10,
        "paddingRight": 10,
        "cursor": "pointer",
        "border": "1px solid transparent",
        "borderRadius": 3
    },
    "rw-selectlist>lirw-list-empty": {
        "paddingLeft": 10,
        "paddingRight": 10
    },
    "ulrw-list>lirw-list-option:hover": {
        "backgroundColor": "#e6e6e6",
        "borderColor": "#adadad"
    },
    "rw-selectlist>lirw-list-option:hover": {
        "backgroundColor": "#e6e6e6",
        "borderColor": "#adadad"
    },
    "ulrw-list>lirw-list-optionrw-state-focus": {
        "backgroundColor": "#fff",
        "border": "#66afe9 1px solid",
        "color": "#333"
    },
    "rw-selectlist>lirw-list-optionrw-state-focus": {
        "backgroundColor": "#fff",
        "border": "#66afe9 1px solid",
        "color": "#333"
    },
    "ulrw-list>lirw-list-optionrw-state-selected": {
        "backgroundColor": "#adadad",
        "border": "#adadad 1px solid",
        "color": "#333"
    },
    "rw-selectlist>lirw-list-optionrw-state-selected": {
        "backgroundColor": "#adadad",
        "border": "#adadad 1px solid",
        "color": "#333"
    },
    "ulrw-list>lirw-list-optionrw-state-disabled": {
        "color": "#777",
        "cursor": "not-allowed"
    },
    "ulrw-list>lirw-list-optionrw-state-readonly": {
        "color": "#777",
        "cursor": "not-allowed"
    },
    "rw-selectlist>lirw-list-optionrw-state-disabled": {
        "color": "#777",
        "cursor": "not-allowed"
    },
    "rw-selectlist>lirw-list-optionrw-state-readonly": {
        "color": "#777",
        "cursor": "not-allowed"
    },
    "ulrw-list>lirw-list-optionrw-state-disabled:hover": {
        "background": "none",
        "borderColor": "transparent"
    },
    "ulrw-list>lirw-list-optionrw-state-readonly:hover": {
        "background": "none",
        "borderColor": "transparent"
    },
    "rw-selectlist>lirw-list-optionrw-state-disabled:hover": {
        "background": "none",
        "borderColor": "transparent"
    },
    "rw-selectlist>lirw-list-optionrw-state-readonly:hover": {
        "background": "none",
        "borderColor": "transparent"
    },
    "ulrw-listrw-list-grouped>lirw-list-optgroup": {
        "paddingLeft": 10
    },
    "rw-selectlistrw-list-grouped>lirw-list-optgroup": {
        "paddingLeft": 10
    },
    "ulrw-listrw-list-grouped>lirw-list-option": {
        "paddingLeft": 20
    },
    "rw-selectlistrw-list-grouped>lirw-list-option": {
        "paddingLeft": 20
    },
    "rw-openrw-widget": {
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "rw-open>rw-multiselect-wrapper": {
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "rw-open-uprw-widget": {
        "borderTopRightRadius": 0,
        "borderTopLeftRadius": 0
    },
    "rw-open-up>rw-multiselect-wrapper": {
        "borderTopRightRadius": 0,
        "borderTopLeftRadius": 0
    },
    "rw-combobox rw-list": {
        "maxHeight": 200,
        "height": "auto"
    },
    "rw-datetimepicker rw-list": {
        "maxHeight": 200,
        "height": "auto"
    },
    "rw-numberpicker rw-list": {
        "maxHeight": 200,
        "height": "auto"
    },
    "rw-dropdownlist rw-list": {
        "maxHeight": 200,
        "height": "auto"
    },
    "rw-multiselect rw-list": {
        "maxHeight": 200,
        "height": "auto"
    },
    "rw-widget rw-input": {
        "borderBottomLeftRadius": 4,
        "borderTopLeftRadius": 4
    },
    "rw-rtl rw-widget rw-input": {
        "borderBottomLeftRadius": 0,
        "borderTopLeftRadius": 0,
        "borderBottomRightRadius": 4,
        "borderTopRightRadius": 4
    },
    "rw-widget>rw-select": {
        "borderLeft": "#ccc 1px solid"
    },
    "rw-widgetrw-rtl>rw-select": {
        "borderRight": "#ccc 1px solid",
        "borderLeft": "none"
    },
    "rw-widgetrw-state-focus": {
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6)",
        "borderColor": "#66afe9",
        "outline": 0
    },
    "rw-widgetrw-state-focus:hover": {
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6)",
        "borderColor": "#66afe9",
        "outline": 0
    },
    "rw-widgetrw-state-readonly": {
        "cursor": "not-allowed"
    },
    "rw-widgetrw-state-readonly>rw-multiselect-wrapper": {
        "cursor": "not-allowed"
    },
    "rw-widgetrw-state-disabled": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "backgroundColor": "#eee",
        "borderColor": "#ccc"
    },
    "rw-widgetrw-state-disabled:hover": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "backgroundColor": "#eee",
        "borderColor": "#ccc"
    },
    "rw-widgetrw-state-disabled:active": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "backgroundColor": "#eee",
        "borderColor": "#ccc"
    },
    "rw-combobox": {
        "paddingRight": 1.9
    },
    "rw-datetimepicker": {
        "paddingRight": 1.9
    },
    "rw-numberpicker": {
        "paddingRight": 1.9
    },
    "rw-comboboxrw-rtl": {
        "paddingRight": 0,
        "paddingLeft": 1.9
    },
    "rw-datetimepickerrw-rtl": {
        "paddingRight": 0,
        "paddingLeft": 1.9
    },
    "rw-numberpickerrw-rtl": {
        "paddingRight": 0,
        "paddingLeft": 1.9
    },
    "rw-dropdownlistrw-rtl": {
        "paddingRight": 0,
        "paddingLeft": 1.9
    },
    "rw-combobox>rw-input": {
        "width": "100%",
        "border": "none",
        "outline": 0
    },
    "rw-datetimepicker>rw-input": {
        "width": "100%",
        "border": "none",
        "outline": 0
    },
    "rw-numberpicker>rw-input": {
        "width": "100%",
        "border": "none",
        "outline": 0
    },
    "rw-dropdownlist>rw-input": {
        "width": "100%",
        "border": "none",
        "outline": 0,
        "lineHeight": 2.286,
        "backgroundColor": "transparent",
        "paddingTop": 0,
        "paddingBottom": 0,
        "paddingRight": 0,
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "rw-combobox>rw-input::-moz-placeholder": {
        "color": "#999",
        "opacity": 1
    },
    "rw-datetimepicker>rw-input::-moz-placeholder": {
        "color": "#999",
        "opacity": 1
    },
    "rw-numberpicker>rw-input::-moz-placeholder": {
        "color": "#999",
        "opacity": 1
    },
    "rw-dropdownlist>rw-input::-moz-placeholder": {
        "color": "#999",
        "opacity": 1
    },
    "rw-combobox>rw-input:-ms-input-placeholder": {
        "color": "#999"
    },
    "rw-datetimepicker>rw-input:-ms-input-placeholder": {
        "color": "#999"
    },
    "rw-numberpicker>rw-input:-ms-input-placeholder": {
        "color": "#999"
    },
    "rw-dropdownlist>rw-input:-ms-input-placeholder": {
        "color": "#999"
    },
    "rw-combobox>rw-input::-webkit-input-placeholder": {
        "color": "#999"
    },
    "rw-datetimepicker>rw-input::-webkit-input-placeholder": {
        "color": "#999"
    },
    "rw-numberpicker>rw-input::-webkit-input-placeholder": {
        "color": "#999"
    },
    "rw-dropdownlist>rw-input::-webkit-input-placeholder": {
        "color": "#999"
    },
    "rw-placeholder": {
        "color": "#999"
    },
    "rw-select": {
        "position": "absolute",
        "width": 1.9,
        "height": "100%",
        "right": 0,
        "top": 0
    },
    "rw-selectrw-btn": {
        "height": "100%",
        "verticalAlign": "middle",
        "outline": 0
    },
    "rw-select>rw-btn": {
        "height": "100%",
        "verticalAlign": "middle",
        "outline": 0
    },
    "rw-rtl rw-select": {
        "left": 0,
        "right": "auto"
    },
    "rw-multiselect": {
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,0.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,0.075)",
        "backgroundColor": "#fff"
    },
    "rw-combobox inputrw-input": {
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,0.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,0.075)"
    },
    "rw-datetimepicker inputrw-input": {
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,0.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,0.075)"
    },
    "rw-numberpicker inputrw-input": {
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,0.075)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,0.075)"
    },
    "rw-combobox:active": {
        "backgroundImage": "none",
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)"
    },
    "rw-datetimepicker:active": {
        "backgroundImage": "none",
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)"
    },
    "rw-dropdownlist:active": {
        "backgroundImage": "none",
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)"
    },
    "rw-header>rw-btn:active": {
        "backgroundImage": "none",
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)"
    },
    "rw-numberpicker rw-btnrw-state-active": {
        "backgroundImage": "none",
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)"
    },
    "rw-combobox:activerw-state-focus": {
        "backgroundImage": "none",
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)"
    },
    "rw-datetimepicker:activerw-state-focus": {
        "backgroundImage": "none",
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)"
    },
    "rw-dropdownlist:activerw-state-focus": {
        "backgroundImage": "none",
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)"
    },
    "rw-header>rw-btn:activerw-state-focus": {
        "backgroundImage": "none",
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)"
    },
    "rw-numberpicker rw-btnrw-state-activerw-state-focus": {
        "backgroundImage": "none",
        "WebkitBoxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)",
        "boxShadow": "inset 0 3px 5px rgba(0,0,0,0.125)"
    },
    "rw-combobox:hover": {
        "backgroundColor": "#e6e6e6",
        "borderColor": "#adadad"
    },
    "rw-datetimepicker:hover": {
        "backgroundColor": "#e6e6e6",
        "borderColor": "#adadad"
    },
    "rw-numberpicker:hover": {
        "backgroundColor": "#e6e6e6",
        "borderColor": "#adadad"
    },
    "rw-dropdownlist:hover": {
        "backgroundColor": "#e6e6e6",
        "borderColor": "#adadad"
    },
    "rw-dropdownlistrw-state-disabled": {
        "cursor": "not-allowed"
    },
    "rw-dropdownlistrw-state-readonly": {
        "cursor": "not-allowed"
    },
    "rw-dropdownlistrw-rtl>rw-input": {
        "paddingTop": 0,
        "paddingRight": 0.857,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "rw-dropdownlist>rw-select": {
        "borderWidth": 0
    },
    "rw-dropdownlistrw-rtl>rw-select": {
        "borderWidth": 0
    },
    "rw-numberpicker rw-btn": {
        "display": "block",
        "height": 1.143,
        "lineHeight": 1.143,
        "width": "100%",
        "borderWidth": 0
    },
    "rw-popup": {
        "position": "absolute",
        "WebkitBoxShadow": "0 5px 6px rgba(0,0,0,0.2)",
        "boxShadow": "0 5px 6px rgba(0,0,0,0.2)",
        "borderTopRightRadius": 0,
        "borderTopLeftRadius": 0,
        "borderBottomRightRadius": 3,
        "borderBottomLeftRadius": 3,
        "border": "#ccc 1px solid",
        "background": "#fff",
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2,
        "overflow": "auto",
        "marginBottom": 10,
        "left": 10,
        "right": 10
    },
    "rw-dropup>rw-popup": {
        "marginBottom": 0,
        "marginTop": 10,
        "borderTopRightRadius": 3,
        "borderTopLeftRadius": 3,
        "borderBottomRightRadius": 0,
        "borderBottomLeftRadius": 0,
        "WebkitBoxShadow": "0 0 6px rgba(0,0,0,0.2)",
        "boxShadow": "0 0 6px rgba(0,0,0,0.2)"
    },
    "rw-popup-container": {
        "position": "absolute",
        "top": "100%",
        "marginTop": 1,
        "zIndex": 1005,
        "left": -11,
        "right": -11
    },
    "rw-widgetrw-state-focus rw-popup-container": {
        "zIndex": 1015
    },
    "rw-popup-containerrw-dropup": {
        "top": "auto",
        "bottom": "100%"
    },
    "rw-popup-containerrw-calendar-popup": {
        "right": "auto",
        "width": 18
    },
    "rw-datetimepicker rw-btn": {
        "width": 1.8
    },
    "rw-datetimepickerrw-has-neither": {
        "paddingLeft": 0,
        "paddingRight": 0
    },
    "rw-datetimepickerrw-has-neither rw-input": {
        "borderRadius": 4
    },
    "rw-datetimepickerrw-has-both": {
        "paddingRight": 3.8
    },
    "rw-datetimepickerrw-has-bothrw-rtl": {
        "paddingRight": 0,
        "paddingLeft": 3.8
    },
    "rw-datetimepickerrw-has-both>rw-select": {
        "width": 3.8,
        "height": "100%"
    },
    "rw-calendar": {
        "backgroundColor": "#fff"
    },
    "rw-calendar thead>tr": {
        "borderBottom": "2px solid #ccc"
    },
    "rw-calendar rw-header": {
        "paddingBottom": 5
    },
    "rw-calendar rw-header rw-btn-left": {
        "width": "12.5%"
    },
    "rw-calendar rw-header rw-btn-right": {
        "width": "12.5%"
    },
    "rw-calendar rw-header rw-btn-view": {
        "width": "75%",
        "backgroundColor": "#eee",
        "borderRadius": 4
    },
    "rw-calendar rw-header rw-btn-view[disabled]": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "cursor": "not-allowed"
    },
    "rw-calendar rw-footer": {
        "borderTop": "1px solid #ccc"
    },
    "rw-calendar rw-footer rw-btn": {
        "width": "100%",
        "whiteSpace": "normal"
    },
    "rw-calendar rw-footer rw-btn:hover": {
        "backgroundColor": "#e6e6e6"
    },
    "rw-calendar rw-footer rw-btn[disabled]": {
        "WebkitBoxShadow": "none",
        "boxShadow": "none",
        "cursor": "not-allowed"
    },
    "rw-calendar-grid": {
        "outline": "none",
        "height": 14.28571429,
        "tableLayout": "fixed",
        "width": "100%"
    },
    "rw-calendar-grid th": {
        "textAlign": "right",
        "paddingTop": 0,
        "paddingRight": 0.4,
        "paddingBottom": 0,
        "paddingLeft": 0.1
    },
    "rw-calendar-grid rw-btn": {
        "width": "100%",
        "textAlign": "right"
    },
    "rw-calendar-grid td rw-btn": {
        "borderRadius": 4,
        "paddingTop": 0,
        "paddingRight": 0.4,
        "paddingBottom": 0,
        "paddingLeft": 0.1,
        "outline": 0
    },
    "rw-calendar-grid td rw-btn:hover": {
        "backgroundColor": "#e6e6e6"
    },
    "rw-calendar-grid td rw-btnrw-off-range": {
        "color": "#b3b3b3"
    },
    "rw-calendar-gridrw-nav-view rw-btn": {
        "paddingTop": 0.25,
        "paddingRight": 0,
        "paddingBottom": 0.3,
        "paddingLeft": 0,
        "display": "block",
        "overflow": "hidden",
        "textAlign": "center",
        "whiteSpace": "normal"
    },
    "rw-selectlist>ul": {
        "height": "100%",
        "overflow": "auto"
    },
    "rw-selectlist>ul>lirw-list-option": {
        "position": "relative",
        "minHeight": 27,
        "cursor": "auto",
        "outline": "none",
        "paddingLeft": 5
    },
    "rw-selectlist>ul>lirw-list-option>label>input": {
        "position": "absolute",
        "marginTop": 4,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": -20
    },
    "rw-selectlist>ul>lirw-list-option>label": {
        "paddingLeft": 20,
        "lineHeight": 1.423,
        "display": "inline-block"
    },
    "rw-selectlistrw-rtl>ul>lirw-list-option": {
        "paddingLeft": 0,
        "paddingRight": 5
    },
    "rw-selectlistrw-rtl>ul>lirw-list-option>label>input": {
        "marginTop": 4,
        "marginRight": -20,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "rw-selectlistrw-rtl>ul>lirw-list-option>label": {
        "paddingLeft": 0,
        "paddingRight": 20
    },
    "rw-selectlistrw-state-disabled>ul>li:hover": {
        "background": "none",
        "borderColor": "transparent"
    },
    "rw-selectlistrw-state-readonly>ul>li:hover": {
        "background": "none",
        "borderColor": "transparent"
    },
    "rw-multiselect:hover": {
        "borderColor": "#adadad"
    },
    "rw-multiselect-wrapper": {
        "borderRadius": 4,
        "position": "relative",
        "cursor": "text"
    },
    "rw-multiselect-wrapper:before": {
        "content": " ",
        "display": "table"
    },
    "rw-multiselect-wrapper:after": {
        "content": " ",
        "display": "table",
        "clear": "both"
    },
    "rw-multiselect-wrapper irw-loading": {
        "position": "absolute",
        "right": 3
    },
    "rw-multiselect-wrapper>rw-input": {
        "outline": 0,
        "borderWidth": 0,
        "lineHeight": "normal",
        "width": "auto",
        "maxWidth": "100%"
    },
    "rw-multiselect-wrapper>rw-input::-moz-placeholder": {
        "color": "#999",
        "opacity": 1
    },
    "rw-multiselect-wrapper>rw-input:-ms-input-placeholder": {
        "color": "#999"
    },
    "rw-multiselect-wrapper>rw-input::-webkit-input-placeholder": {
        "color": "#999"
    },
    "rw-state-readonly>rw-multiselect-wrapper": {
        "cursor": "not-allowed"
    },
    "rw-state-disabled>rw-multiselect-wrapper": {
        "cursor": "not-allowed"
    },
    "rw-rtl rw-multiselect-wrapper>rw-input": {
        "float": "right"
    },
    "rw-multiselect-create-tag": {
        "borderTop": "1px #ccc solid",
        "paddingTop": 5,
        "marginTop": 5
    },
    "rw-multiselect-taglist": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingLeft": 0,
        "listStyle": "none",
        "display": "inline",
        "paddingRight": 0
    },
    "rw-multiselect-taglist>li": {
        "display": "inline-block",
        "paddingLeft": 0.4,
        "paddingRight": 0.15,
        "marginTop": 1,
        "marginRight": 1,
        "marginBottom": 1,
        "marginLeft": 1,
        "paddingTop": 0.214,
        "paddingBottom": 0.214,
        "lineHeight": 1.4,
        "textAlign": "center",
        "whiteSpace": "nowrap",
        "borderRadius": 3,
        "border": "1px solid #ccc",
        "backgroundColor": "#ccc",
        "cursor": "pointer"
    },
    "rw-multiselect-taglist>lirw-state-focus": {
        "backgroundColor": "#fff",
        "border": "#66afe9 1px solid",
        "color": "#333"
    },
    "rw-multiselect-taglist>lirw-state-readonly": {
        "cursor": "not-allowed",
        "filter": "alpha(opacity=65)",
        "opacity": 0.65
    },
    "rw-multiselect-taglist>lirw-state-disabled": {
        "cursor": "not-allowed",
        "filter": "alpha(opacity=65)",
        "opacity": 0.65
    },
    "rw-multiselectrw-state-readonly rw-multiselect-taglist>li": {
        "cursor": "not-allowed",
        "filter": "alpha(opacity=65)",
        "opacity": 0.65
    },
    "rw-multiselectrw-state-disabled rw-multiselect-taglist>li": {
        "cursor": "not-allowed",
        "filter": "alpha(opacity=65)",
        "opacity": 0.65
    },
    "rw-multiselect-taglist>li rw-btn": {
        "outline": 0,
        "fontSize": "115%",
        "lineHeight": "normal"
    },
    "rw-rtl rw-multiselect-taglist>li": {
        "float": "right"
    }
});