import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "App": {
        "textAlign": "center"
    },
    "App-logo": {
        "animation": "App-logo-spin infinite 20s linear",
        "height": 80
    },
    "App-header": {
        "backgroundColor": "#222",
        "height": 150,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "color": "white"
    },
    "App-intro": {
        "fontSize": "large"
    },
    "rbc-btn": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "buttonrbc-btn": {
        "overflow": "visible",
        "textTransform": "none",
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "button[disabled]rbc-btn": {
        "cursor": "not-allowed"
    },
    "buttonrbc-input::-moz-focus-inner": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "rbc-calendar": {
        "boxSizing": "border-box",
        "height": "100%",
        "display": "flex",
        "MsFlexDirection": "column",
        "flexDirection": "column",
        "MsFlexAlign": "stretch",
        "alignItems": "stretch"
    },
    "rbc-calendar *": {
        "boxSizing": "inherit"
    },
    "rbc-calendar *:before": {
        "boxSizing": "inherit"
    },
    "rbc-calendar *:after": {
        "boxSizing": "inherit"
    },
    "rbc-abs-full": {
        "overflow": "hidden",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0
    },
    "rbc-row-bg": {
        "overflow": "hidden",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "display": "flex",
        "MsFlexDirection": "row",
        "flexDirection": "row",
        "MsFlex": "1 0 0px",
        "flex": "1 0 0"
    },
    "rbc-ellipsis": {
        "display": "block",
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "rbc-event-label": {
        "display": "block",
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap",
        "fontSize": "80%"
    },
    "rbc-row-segment rbc-event-content": {
        "display": "block",
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
    },
    "rbc-show-more": {
        "display": "block",
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap",
        "backgroundColor": "rgba(255, 255, 255, 0.3)",
        "zIndex": 4,
        "fontWeight": "bold",
        "fontSize": "85%",
        "height": "auto",
        "lineHeight": "normal"
    },
    "rbc-rtl": {
        "direction": "rtl"
    },
    "rbc-off-range": {
        "color": "#b3b3b3"
    },
    "rbc-header": {
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap",
        "paddingTop": 0,
        "paddingRight": 3,
        "paddingBottom": 0,
        "paddingLeft": 3,
        "textAlign": "center",
        "verticalAlign": "middle",
        "fontWeight": "bold",
        "fontSize": "90%",
        "minHeight": 0
    },
    "rbc-header > a": {
        "color": "inherit",
        "textDecoration": "none"
    },
    "rbc-header > a:active": {
        "color": "inherit",
        "textDecoration": "none"
    },
    "rbc-header > a:visited": {
        "color": "inherit",
        "textDecoration": "none"
    },
    "rbc-row-content": {
        "position": "relative",
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none",
        "zIndex": 4
    },
    "rbc-today": {
        "backgroundColor": "#eaf6ff"
    },
    "rbc-toolbar": {
        "display": "flex",
        "MsFlexAlign": "center",
        "alignItems": "center",
        "marginBottom": 10,
        "fontSize": 16
    },
    "rbc-toolbar rbc-toolbar-label": {
        "width": "100%",
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "textAlign": "center"
    },
    "rbc-toolbar button": {
        "color": "#373a3c",
        "display": "inline-block",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "textAlign": "center",
        "verticalAlign": "middle",
        "background": "none",
        "backgroundImage": "none",
        "border": "1px solid #ccc",
        "paddingTop": 0.375,
        "paddingRight": 1,
        "paddingBottom": 0.375,
        "paddingLeft": 1,
        "borderRadius": 4,
        "lineHeight": "normal",
        "whiteSpace": "nowrap"
    },
    "rbc-toolbar button:active": {
        "backgroundImage": "none",
        "boxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "backgroundColor": "#e6e6e6",
        "borderColor": "#adadad"
    },
    "rbc-toolbar buttonrbc-active": {
        "backgroundImage": "none",
        "boxShadow": "inset 0 3px 5px rgba(0, 0, 0, 0.125)",
        "backgroundColor": "#e6e6e6",
        "borderColor": "#adadad"
    },
    "rbc-toolbar button:active:hover": {
        "color": "#373a3c",
        "backgroundColor": "#d4d4d4",
        "borderColor": "#8c8c8c"
    },
    "rbc-toolbar buttonrbc-active:hover": {
        "color": "#373a3c",
        "backgroundColor": "#d4d4d4",
        "borderColor": "#8c8c8c"
    },
    "rbc-toolbar button:active:focus": {
        "color": "#373a3c",
        "backgroundColor": "#d4d4d4",
        "borderColor": "#8c8c8c"
    },
    "rbc-toolbar buttonrbc-active:focus": {
        "color": "#373a3c",
        "backgroundColor": "#d4d4d4",
        "borderColor": "#8c8c8c"
    },
    "rbc-toolbar button:focus": {
        "color": "#373a3c",
        "backgroundColor": "#e6e6e6",
        "borderColor": "#adadad"
    },
    "rbc-toolbar button:hover": {
        "color": "#373a3c",
        "backgroundColor": "#e6e6e6",
        "borderColor": "#adadad"
    },
    "rbc-btn-group": {
        "display": "inline-block",
        "whiteSpace": "nowrap"
    },
    "rbc-btn-group > button:first-child:not(:last-child)": {
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 0
    },
    "rbc-btn-group > button:last-child:not(:first-child)": {
        "borderTopLeftRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "rbc-rtl rbc-btn-group > button:first-child:not(:last-child)": {
        "borderRadius": 4,
        "borderTopLeftRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "rbc-rtl rbc-btn-group > button:last-child:not(:first-child)": {
        "borderRadius": 4,
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 0
    },
    "rbc-btn-group > button:not(:first-child):not(:last-child)": {
        "borderRadius": 0
    },
    "rbc-btn-group button + button": {
        "marginLeft": -1
    },
    "rbc-rtl rbc-btn-group button + button": {
        "marginLeft": 0,
        "marginRight": -1
    },
    "rbc-btn-group + rbc-btn-group": {
        "marginLeft": 10
    },
    "rbc-btn-group + button": {
        "marginLeft": 10
    },
    "rbc-event": {
        "cursor": "pointer",
        "paddingTop": 2,
        "paddingRight": 5,
        "paddingBottom": 2,
        "paddingLeft": 5,
        "backgroundColor": "#3174ad",
        "borderRadius": 5,
        "color": "#fff"
    },
    "rbc-eventrbc-selected": {
        "backgroundColor": "#265985"
    },
    "rbc-event-overlaps": {
        "boxShadow": "-1px 1px 5px 0px rgba(51, 51, 51, 0.5)"
    },
    "rbc-event-continues-prior": {
        "borderTopLeftRadius": 0,
        "borderBottomLeftRadius": 0
    },
    "rbc-event-continues-after": {
        "borderTopRightRadius": 0,
        "borderBottomRightRadius": 0
    },
    "rbc-event-continues-earlier": {
        "borderTopLeftRadius": 0,
        "borderTopRightRadius": 0
    },
    "rbc-event-continues-later": {
        "borderBottomLeftRadius": 0,
        "borderBottomRightRadius": 0
    },
    "rbc-row": {
        "display": "flex",
        "MsFlexDirection": "row",
        "flexDirection": "row"
    },
    "rbc-row-segment": {
        "paddingTop": 0,
        "paddingRight": 1,
        "paddingBottom": 1,
        "paddingLeft": 1
    },
    "rbc-selected-cell": {
        "backgroundColor": "rgba(0, 0, 0, 0.1)"
    },
    "rbc-month-view": {
        "position": "relative",
        "border": "1px solid #DDD",
        "display": "flex",
        "MsFlexDirection": "column",
        "flexDirection": "column",
        "MsFlex": "1 0 0px",
        "flex": "1 0 0",
        "width": "100%",
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none",
        "height": "100%"
    },
    "rbc-month-view rbc-header": {
        "borderBottom": "1px solid #DDD"
    },
    "rbc-month-view rbc-header + rbc-header": {
        "borderLeft": "1px solid #DDD"
    },
    "rbc-rtl rbc-month-view rbc-header + rbc-header": {
        "borderLeftWidth": 0,
        "borderRight": "1px solid #DDD"
    },
    "rbc-month-header": {
        "display": "flex",
        "MsFlexDirection": "row",
        "flexDirection": "row"
    },
    "rbc-month-row": {
        "display": "flex",
        "position": "relative",
        "MsFlexDirection": "column",
        "flexDirection": "column",
        "MsFlex": "1 0 0px",
        "flex": "1 0 0",
        "overflow": "hidden",
        "height": "100%"
    },
    "rbc-month-row + rbc-month-row": {
        "borderTop": "1px solid #DDD"
    },
    "rbc-date-cell": {
        "paddingRight": 5,
        "textAlign": "right"
    },
    "rbc-date-cellrbc-now": {
        "fontWeight": "bold"
    },
    "rbc-date-cell > a": {
        "color": "inherit",
        "textDecoration": "none"
    },
    "rbc-date-cell > a:active": {
        "color": "inherit",
        "textDecoration": "none"
    },
    "rbc-date-cell > a:visited": {
        "color": "inherit",
        "textDecoration": "none"
    },
    "rbc-day-bg + rbc-day-bg": {
        "borderLeft": "1px solid #DDD"
    },
    "rbc-rtl rbc-day-bg + rbc-day-bg": {
        "borderLeftWidth": 0,
        "borderRight": "1px solid #DDD"
    },
    "rbc-overlay": {
        "position": "absolute",
        "zIndex": 5,
        "border": "1px solid #e5e5e5",
        "backgroundColor": "#fff",
        "boxShadow": "0 5px 15px rgba(0, 0, 0, 0.25)",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10
    },
    "rbc-overlay > * + *": {
        "marginTop": 1
    },
    "rbc-overlay-header": {
        "borderBottom": "1px solid #e5e5e5",
        "marginTop": -10,
        "marginRight": -10,
        "marginBottom": 5,
        "marginLeft": -10,
        "paddingTop": 2,
        "paddingRight": 10,
        "paddingBottom": 2,
        "paddingLeft": 10
    },
    "rbc-agenda-view": {
        "display": "flex",
        "MsFlexDirection": "column",
        "flexDirection": "column",
        "MsFlex": "1 0 0px",
        "flex": "1 0 0",
        "overflow": "auto"
    },
    "rbc-agenda-view table": {
        "width": "100%",
        "border": "1px solid #DDD"
    },
    "rbc-agenda-view table tbody > tr > td": {
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "verticalAlign": "top"
    },
    "rbc-agenda-view table rbc-agenda-time-cell": {
        "paddingLeft": 15,
        "paddingRight": 15,
        "textTransform": "lowercase"
    },
    "rbc-agenda-view table tbody > tr > td + td": {
        "borderLeft": "1px solid #DDD"
    },
    "rbc-rtl rbc-agenda-view table tbody > tr > td + td": {
        "borderLeftWidth": 0,
        "borderRight": "1px solid #DDD"
    },
    "rbc-agenda-view table tbody > tr + tr": {
        "borderTop": "1px solid #DDD"
    },
    "rbc-agenda-view table thead > tr > th": {
        "paddingTop": 3,
        "paddingRight": 5,
        "paddingBottom": 3,
        "paddingLeft": 5,
        "textAlign": "left",
        "borderBottom": "1px solid #DDD"
    },
    "rbc-rtl rbc-agenda-view table thead > tr > th": {
        "textAlign": "right"
    },
    "rbc-agenda-time-cell": {
        "textTransform": "lowercase",
        "whiteSpace": "nowrap"
    },
    "rbc-agenda-time-cell rbc-continues-after:after": {
        "content": "' »'"
    },
    "rbc-agenda-time-cell rbc-continues-prior:before": {
        "content": "'« '"
    },
    "rbc-agenda-date-cell": {
        "whiteSpace": "nowrap"
    },
    "rbc-agenda-event-cell": {
        "width": "100%"
    },
    "rbc-time-column": {
        "display": "flex",
        "MsFlexDirection": "column",
        "flexDirection": "column",
        "minHeight": "100%"
    },
    "rbc-time-column rbc-timeslot-group": {
        "MsFlex": 1,
        "flex": 1
    },
    "rbc-timeslot-group": {
        "borderBottom": "1px solid #DDD",
        "minHeight": 40,
        "display": "flex",
        "MsFlexFlow": "column nowrap",
        "flexFlow": "column nowrap"
    },
    "rbc-time-gutter": {
        "MsFlex": "none",
        "flex": "none"
    },
    "rbc-header-gutter": {
        "MsFlex": "none",
        "flex": "none"
    },
    "rbc-label": {
        "paddingTop": 0,
        "paddingRight": 5,
        "paddingBottom": 0,
        "paddingLeft": 5
    },
    "rbc-day-slot": {
        "position": "relative"
    },
    "rbc-day-slot rbc-event": {
        "border": "1px solid #265985",
        "display": "flex",
        "maxHeight": "100%",
        "MsFlexFlow": "column wrap",
        "flexFlow": "column wrap",
        "MsFlexAlign": "start",
        "alignItems": "flex-start",
        "overflow": "hidden",
        "position": "absolute",
        "zIndex": 2
    },
    "rbc-day-slot rbc-event-label": {
        "MsFlex": "none",
        "flex": "none",
        "paddingRight": 5,
        "width": "auto"
    },
    "rbc-day-slot rbc-event-content": {
        "width": "100%",
        "MsFlex": "1 1 0px",
        "flex": "1 1 0",
        "wordWrap": "break-word",
        "lineHeight": 1,
        "height": "100%",
        "minHeight": 1
    },
    "rbc-day-slot rbc-time-slot": {
        "borderTop": "1px solid #f7f7f7"
    },
    "rbc-time-slot": {
        "MsFlex": "1 0 0px",
        "flex": "1 0 0"
    },
    "rbc-time-slotrbc-now": {
        "fontWeight": "bold"
    },
    "rbc-day-header": {
        "textAlign": "center"
    },
    "rbc-slot-selection": {
        "zIndex": 10,
        "position": "absolute",
        "cursor": "default",
        "backgroundColor": "rgba(0, 0, 0, 0.5)",
        "color": "white",
        "fontSize": "75%",
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 3,
        "paddingLeft": 3
    },
    "rbc-time-view": {
        "display": "flex",
        "MsFlexDirection": "column",
        "flexDirection": "column",
        "MsFlex": 1,
        "flex": 1,
        "width": "100%",
        "border": "1px solid #DDD",
        "minHeight": 0
    },
    "rbc-time-view rbc-time-gutter": {
        "whiteSpace": "nowrap"
    },
    "rbc-time-view rbc-allday-cell": {
        "width": "100%",
        "position": "relative"
    },
    "rbc-time-view rbc-allday-events": {
        "position": "relative",
        "zIndex": 4
    },
    "rbc-time-view rbc-row": {
        "minHeight": 20
    },
    "rbc-time-header": {
        "display": "flex",
        "MsFlex": "0 0 auto",
        "flex": "0 0 auto",
        "MsFlexDirection": "column",
        "flexDirection": "column"
    },
    "rbc-time-headerrbc-overflowing": {
        "borderRight": "1px solid #DDD"
    },
    "rbc-rtl rbc-time-headerrbc-overflowing": {
        "borderRightWidth": 0,
        "borderLeft": "1px solid #DDD"
    },
    "rbc-time-header > rbc-row > * + *": {
        "borderLeft": "1px solid #DDD"
    },
    "rbc-rtl rbc-time-header > rbc-row > * + *": {
        "borderLeftWidth": 0,
        "borderRight": "1px solid #DDD"
    },
    "rbc-time-header > rbc-row:first-child": {
        "borderBottom": "1px solid #DDD"
    },
    "rbc-time-header rbc-gutter-cell": {
        "MsFlex": "none",
        "flex": "none"
    },
    "rbc-time-header > rbc-gutter-cell + *": {
        "width": "100%"
    },
    "rbc-time-content": {
        "display": "flex",
        "MsFlex": "1 0 0%",
        "flex": "1 0 0%",
        "MsFlexAlign": "start",
        "alignItems": "flex-start",
        "width": "100%",
        "borderTop": "2px solid #DDD",
        "overflowY": "auto",
        "position": "relative"
    },
    "rbc-time-content > rbc-time-gutter": {
        "MsFlex": "none",
        "flex": "none"
    },
    "rbc-time-content > * + * > *": {
        "borderLeft": "1px solid #DDD"
    },
    "rbc-rtl rbc-time-content > * + * > *": {
        "borderLeftWidth": 0,
        "borderRight": "1px solid #DDD"
    },
    "rbc-time-content > rbc-day-slot": {
        "width": "100%",
        "WebkitUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none"
    },
    "rbc-current-time-indicator": {
        "position": "absolute",
        "zIndex": 1,
        "left": 0,
        "height": 1,
        "backgroundColor": "#74ad31",
        "pointerEvents": "none"
    },
    "rbc-current-time-indicator::before": {
        "display": "block",
        "position": "absolute",
        "left": -3,
        "top": -3,
        "content": "' '",
        "backgroundColor": "#74ad31",
        "borderRadius": "50%",
        "width": 8,
        "height": 8
    },
    "rbc-rtl rbc-current-time-indicator::before": {
        "left": 0,
        "right": -3
    }
});