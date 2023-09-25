# Note fullstack open part 1

## HTTP

HTTP consists of body and headers
the **body** consist of (HTML, JSON) => for response or (form fields) => for request.
on the other hand **headers** let the client and server pass essential information.

## HTTP headers

### Definition

HTTP headers fields are a list of strings sent and receveid by client and server on every http request and response.
They define how information sent/recevied through the connection are encoded, the session verification and identification
of the client (as in browser cookie IP address, user-agent), how the server handle the data, the age (the time it has resided in a shared cache)
of the document being downloaded.

HTTP headers can be grouped into four categories by their context

- **General headers** contain information that is relevant for both request and response, but no information about the data in a body.
- **Request headers** hold information about the client and requested resource
- **Response headers** include server details, like time, location, configuration
- **Entity header** informs browser about the type and body of the resource

### General

- **Request Url** Url yang kita tuju
- **Request Method** GET,POST, (note put: replace the entire content, patch: modify only certain data)
- **Status Code**
  1. informational responses (100-199)
  2. successful responses (200-299)
  3. Redirection responses (300-399)
  4. Client error responses (400-499)
  5. Server error responses (500-599)
- **Remove Address** the ip address of the server

### Request Header

- **Accept**: text/html
  Informs the server, what data types can be accepted, describes the content format. For example:
  audio/ogg indicates an audio file
  image/png - an image file
  text/html - HTML file
  application/json - data in the JSON format

- **Accept-Encoding**: gzip, deflate
  An algorithm, such as compression that is used on the recourse sent back.
- **Accept-Language**: en-US,en
  Hints the server about the expected language
- Connection: keep-alive
  Controls how long connection should stay open
- **Host**: example.com
  The domain name of the server
- **User-Agent**: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4)
  Lets server to identify the characteristics of the application, OS, vendor, and versions

_Some of the important and common Request Header properties were not included from the domain example.com, but they should be mentioned:_

- **Cookie**: 'cookie-list'
  Contains stored piece of information, previously sent by the server. For example: Cookie: name=value; name2=value2; name3=value3

- **Authorization**: 'type' 'credentials'
  Includes credentials to authenticate a user with a server. The two most used types are Basic, for base64-encoded credentials, and Bearer for access tokens.

- **Referer**: 'url'
  Contains the address of the previous page, from which the user was linked to the current page

_The last group is Response Headers includes:_

**Age**: 270773
Time in seconds how long the object was in the proxy cache

**Cache-Control**: max-age=604800
Set the instruction for caching. Other setting types: no-cache, no-store, no-transform

**Content-Encoding**: gzip
Specifies the compression algorithm used for the response body

**Content-Length**: 648
The size of the recourse in bytes

**Content-Type**: text/html; charset=UTF-8
The resource type received. The current type is an HTML document.

**Date**: Sun, 12 Apr 2020 16:49:25 GMT
The time when the message was created

**Expires**: Sun, 19 Apr 2020 16:49:25 GMT
Sets the date when the relevant content will no longer be new/fresh

**Server**: ECS (nyb/1D2C)
Specifies the software used by the server at the time of the sent Response

X-**Cache**: HIT
It means that the request was sent not from the origin servers, but from an exclusive network (CDN), designed to cache content, so the user could get Response faster

**Set-Cookie**: 'cookie-name=cookie-value'
Sent cookies from the server to the user-agent. May include other cookie settings, such as expiration date, max-age, domain, security. For example: Set-Cookie: id=qwerty123; Expires=Wed, 13 Apr 2020 07:00:00 GMT
