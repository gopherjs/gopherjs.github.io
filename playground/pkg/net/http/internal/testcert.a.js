����Archive�� 	
ImportPath Name Imports�� 
ExportData
 Declarations�� 	IncJSCode
 FileSet
 Minified GoLinknames��   ��[]string��   ��[]*compiler.Decl�� ��  ������ FullName LinkingName�� Vars�� DeclCode
 MethodListCode
 TypeInitCode
 InitCode
 DceObjectFilter DceMethodFilter DceDeps�� Blocking   *��SymName�� PkgPath Name   $��[]compiler.GoLinkname�� ��  ;��
GoLinkname�� Implementation�� 	Reference��   �/��net/http/internal/testcerttestcertstrings<i %
 testcertLocalhostCertLocalhostKeyV  V %  
 strings!	strings = $packages["strings"];
��    		$r = strings.$init(); /* */ $s = 1; case 1: if($c) { $c = false; $r = $r.$blk(); } if ($r && $r.$blk !== undefined) { break s; }
  	sliceType!	sliceType = $sliceType($Uint8);
	sliceType  LocalhostCert  LocalhostKey  �[  .		$pkg.LocalhostCert = (new sliceType($stringToBytes("-----BEGIN CERTIFICATE-----\nMIICEzCCAXygAwIBAgIQMIMChMLGrR+QvmQvpwAU6zANBgkqhkiG9w0BAQsFADAS\nMRAwDgYDVQQKEwdBY21lIENvMCAXDTcwMDEwMTAwMDAwMFoYDzIwODQwMTI5MTYw\nMDAwWjASMRAwDgYDVQQKEwdBY21lIENvMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCB\niQKBgQDuLnQAI3mDgey3VBzWnB2L39JUU4txjeVE6myuDqkM/uGlfjb9SjY1bIw4\niA5sBBZzHi3z0h1YV8QPuxEbi4nW91IJm2gsvvZhIrCHS3l6afab4pZBl2+XsDul\nrKBxKKtD1rGxlG4LjncdabFn9gvLZad2bSysqz/qTAUStTvqJQIDAQABo2gwZjAO\nBgNVHQ8BAf8EBAMCAqQwEwYDVR0lBAwwCgYIKwYBBQUHAwEwDwYDVR0TAQH/BAUw\nAwEB/zAuBgNVHREEJzAlggtleGFtcGxlLmNvbYcEfwAAAYcQAAAAAAAAAAAAAAAA\nAAAAATANBgkqhkiG9w0BAQsFAAOBgQCEcetwO59EWk7WiJsG4x8SY+UIAA+flUI9\ntyC4lNhbcF2Idq9greZwbYCqTTTr2XiRNSMLCOjKyI7ukPoPjo16ocHj+P3vZGfs\nh1fIw3cSS2OolhloGw/XM6RWPWtPAlGykKLciQrBru5NAPvCMsb/I1DAceTiotQM\nfblo6RBxUQ==\n-----END CERTIFICATE-----")));
LocalhostCert(net/http/internal/testcert.LocalhostCert$net/http/internal/testcert.sliceType  ��  �		$pkg.LocalhostKey = (new sliceType($stringToBytes(testingKey("-----BEGIN RSA TESTING KEY-----\nMIICXgIBAAKBgQDuLnQAI3mDgey3VBzWnB2L39JUU4txjeVE6myuDqkM/uGlfjb9\nSjY1bIw4iA5sBBZzHi3z0h1YV8QPuxEbi4nW91IJm2gsvvZhIrCHS3l6afab4pZB\nl2+XsDulrKBxKKtD1rGxlG4LjncdabFn9gvLZad2bSysqz/qTAUStTvqJQIDAQAB\nAoGAGRzwwir7XvBOAy5tM/uV6e+Zf6anZzus1s1Y1ClbjbE6HXbnWWF/wbZGOpet\n3Zm4vD6MXc7jpTLryzTQIvVdfQbRc6+MUVeLKwZatTXtdZrhu+Jk7hx0nTPy8Jcb\nuJqFk541aEw+mMogY/xEcfbWd6IOkp+4xqjlFLBEDytgbIECQQDvH/E6nk+hgN4H\nqzzVtxxr397vWrjrIgPbJpQvBsafG7b0dA4AFjwVbFLmQcj2PprIMmPcQrooz8vp\njy4SHEg1AkEA/v13/5M47K9vCxmb8QeD/asydfsgS5TeuNi8DoUBEmiSJwma7FXY\nfFUtxuvL7XvjwjN5B30pNEbc6Iuyt7y4MQJBAIt21su4b3sjXNueLKH85Q+phy2U\nfQtuUE9txblTu14q3N7gHRZB4ZMhFYyDy8CKrN2cPg/Fvyt0Xlp/DoCzjA0CQQDU\ny2ptGsuSmgUtWj3NM9xuwYPm+Z/F84K6+ARYiZ6PYj013sovGKUFfYAqVXVlxtIX\nqyUBnu3X9ps8ZfjLZO7BAkEAlT4R5Yl6cGhaJQYZHOde3JEMhNRcVFMO8dJDaFeo\nf9Oeos0UUothgiDktdQHxdNEwLjQf7lJJBzV+5OtwswCWA==\n-----END RSA TESTING KEY-----"))));
'net/http/internal/testcert.LocalhostKey$net/http/internal/testcert.sliceType%net/http/internal/testcert.testingKey %net/http/internal/testcert.testingKeynet/http/internal/testcert
testingKey 
testingKeyq	testingKey = function(s) {
		var s;
  	U		return strings.ReplaceAll(s, "TESTING KEY", "PRIVATE KEY");
    	};

testingKey%net/http/internal/testcert.testingKeystrings.ReplaceAll �s{"Base":2451,"Files":[{"Name":"/tmp/gopherjs_playground.rPpRNYiCWW/goroot/src/net/http/internal/testcert/testcert.go","Base":1,"Size":2449,"Lines":[0,55,109,159,160,224,241,242,259,260,316,382,416,553,609,674,739,804,869,934,999,1064,1129,1194,1259,1324,1337,1365,1366,1420,1490,1555,1620,1685,1750,1815,1880,1945,2010,2075,2140,2205,2270,2319,2352,2353],"Infos":null}]}
 