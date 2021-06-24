"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.onRenderBody = void 0;

var _react = _interopRequireDefault(require("react"));

var onRenderBody = function onRenderBody(_ref, pluginOptions) {
    var setPostBodyComponents = _ref.setPostBodyComponents;
    var setPreBodyComponents = _ref.setPreBodyComponents;
    var scriptStr = 'setTimeout(function() {new ass_SocialShare({';
    if (pluginOptions["providers"]) {
        scriptStr += 'providers: ' + pluginOptions["providers"] + ',';
    } else {
        scriptStr += 'providers: {"facebook":"Facebook","linkedin":"Linkedin","pinterest":"Pinterest","twitter":"Twitter","cloudshare":"Cloud Share"},';
    }
    if (pluginOptions["size"]) {
        scriptStr += 'size: ' + pluginOptions["size"] + ',';
    }
    scriptStr += 'template: {';
    if (pluginOptions["corners"]) {
        scriptStr += 'corners:"' + pluginOptions["corners"] + '",';
    }
    if (pluginOptions["bgcolor"]) {
        scriptStr += 'bgcolor:"' + pluginOptions["bgcolor"] + '",';
    }
    if (pluginOptions["interfacetype"] == "inline") {
        scriptStr += 'interface:"' + pluginOptions["interfacetype"] + '",';
        if (pluginOptions["id"]) {
            scriptStr += 'id:"' + pluginOptions["id"] + '",';
        }
        scriptStr += 'alignment: {';
        if (pluginOptions["alignment_desktop"]) {
            scriptStr += 'desktop:"' + pluginOptions["alignment_desktop"] + '",';
        }
        if (pluginOptions["alignment_mobile"]) {
            scriptStr += 'mobile:"' + pluginOptions["alignment_mobile"] + '",';
        }
        scriptStr += '}';
    } else {
        scriptStr += 'interface:"floating",';
        if (pluginOptions["topoffset"]) {
            scriptStr += 'topoffset:"' + pluginOptions["topoffset"] + '",';
        }
        scriptStr += 'alignment: {';
        if (pluginOptions["alignment_desktop"]) {
            scriptStr += 'desktop:"' + pluginOptions["alignment_desktop"] + '",';
        }
        if (pluginOptions["alignment_mobile"]) {
            scriptStr += 'mobile:"' + pluginOptions["alignment_mobile"] + '"';
        }
        scriptStr += '}';
    }
    scriptStr += '}})},2000);';
    return (
            setPreBodyComponents([_react.default.createElement("script", {
                    key: "gatsby-plugin-addsocialshare",
                    src: "//cdn.addsocialshare.com/v1/socialshare.min.js"
                })]) + setPostBodyComponents([_react.default.createElement("script", {
            key: "gatsby-plugin-addsocialshare",
            dangerouslySetInnerHTML: {__html: scriptStr}
        })])
            )
};

exports.onRenderBody = onRenderBody;