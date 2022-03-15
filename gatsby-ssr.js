"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.onRenderBody = void 0;

var _react = _interopRequireDefault(require("react"));

var onRenderBody = function onRenderBody(_ref, pluginOptions) {
  var setPostBodyComponents = _ref.setPostBodyComponents;
  var setPreBodyComponents = _ref.setPreBodyComponents;

  const options = {
    providers: pluginOptions.providers || {
      facebook: "Facebook",
      linkedin: "Linkedin",
      pinterest: "Pinterest",
      twitter: "Twitter",
      cloudshare: "Cloud Share",
    },
    template: { alignment: {}, interface: "floating" },
  };
  if (pluginOptions["size"]) {
    options.size = pluginOptions["size"];
  }
  if (pluginOptions["corners"]) {
    options.template.corners = pluginOptions["corners"];
  }
  if (pluginOptions["bgcolor"]) {
    options.template.bgcolor = pluginOptions["bgcolor"];
  }
  if (pluginOptions["alignment_desktop"]) {
    options.template.alignment.desktop = pluginOptions["alignment_desktop"];
  }
  if (pluginOptions["alignment_mobile"]) {
    options.template.alignment.mobile = pluginOptions["alignment_mobile"];
  }
  if (pluginOptions["interfacetype"] == "inline") {
    options.template.interface = pluginOptions["interfacetype"];
    if (pluginOptions["id"]) {
      options.template.id = pluginOptions["id"];
    }
  } else {
    if (pluginOptions["topoffset"]) {
      options.template.topoffset = pluginOptions["topoffset"];
    }
  }

  var scriptStr = `setTimeout(function() {new ass_SocialShare(${JSON.stringify(
    options
  )});}, 2000);`;

  return (
    setPreBodyComponents([
      _react.default.createElement("script", {
        key: "gatsby-plugin-addsocialshare",
        src: "//cdn.addsocialshare.com/v1/socialshare.min.js",
      }),
    ]) +
    setPostBodyComponents([
      _react.default.createElement("script", {
        key: "gatsby-plugin-addsocialshare",
        dangerouslySetInnerHTML: { __html: scriptStr },
      }),
    ])
  );
};

exports.onRenderBody = onRenderBody;
