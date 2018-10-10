/*1539183701,,JIT Construction: v4404223,en_US*/

/**
 * Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use of
 * this software is subject to the Facebook Platform Policy
 * [http://developers.facebook.com/policy/]. This copyright notice shall be
 * included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
try {(function(){if(typeof fb_param==="undefined"||fb_param===null||!fb_param.pixel_id)return;function a(a){var b=[];for(var c=0,d=a.length;c<d;c++)b.push(a[c][0]+"="+encodeURIComponent(a[c][1]));return b.join("&")}var b="https://www.facebook.com/offsite_event.php",c=[];c.push(["id",fb_param.pixel_id]);fb_param.value&&c.push(["value",fb_param.value]);fb_param.currency&&c.push(["currency",fb_param.currency]);var d=fb_param.cd;if(d&&typeof d==="object")for(var e in d)if(Object.prototype.hasOwnProperty.call(d,e)){var f=d[e],g=f===null?"null":typeof f;g in{number:1,string:1,"boolean":1}?c.push(["cd["+encodeURIComponent(e)+"]",f]):g==="object"&&(f=typeof JSON==="undefined"?String(f):JSON.stringify(f),c.push(["cd["+encodeURIComponent(e)+"]",f]))}g=b+"?"+a(c);f=new Image();f.src=g})();} catch (e) {new Image().src="https:\/\/www.facebook.com\/" + 'common/scribe_endpoint.php?c=jssdk_error&m='+encodeURIComponent('{"error":"LOAD", "extra": {"name":"'+e.name+'","line":"'+(e.lineNumber||e.line)+'","script":"'+(e.fileName||e.sourceURL||e.script)+'","stack":"'+(e.stackTrace||e.stack)+'","revision":"4404223","namespace":"FB","message":"'+e.message+'"}}');}