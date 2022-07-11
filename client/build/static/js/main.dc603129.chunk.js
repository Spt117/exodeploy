(this["webpackJsonptruffle-client"]=this["webpackJsonptruffle-client"]||[]).push([[0],{116:function(e){e.exports=JSON.parse('{"contractName":"SimpleStorage","abi":[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"data","type":"uint256"},{"indexed":false,"internalType":"address","name":"addr","type":"address"}],"name":"dataStored","type":"event"},{"inputs":[],"name":"get","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"}],"metadata":"{\\"compiler\\":{\\"version\\":\\"0.8.14+commit.80d49f37\\"},\\"language\\":\\"Solidity\\",\\"output\\":{\\"abi\\":[{\\"anonymous\\":false,\\"inputs\\":[{\\"indexed\\":false,\\"internalType\\":\\"uint256\\",\\"name\\":\\"data\\",\\"type\\":\\"uint256\\"},{\\"indexed\\":false,\\"internalType\\":\\"address\\",\\"name\\":\\"addr\\",\\"type\\":\\"address\\"}],\\"name\\":\\"dataStored\\",\\"type\\":\\"event\\"},{\\"inputs\\":[],\\"name\\":\\"get\\",\\"outputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"\\",\\"type\\":\\"uint256\\"}],\\"stateMutability\\":\\"view\\",\\"type\\":\\"function\\"},{\\"inputs\\":[{\\"internalType\\":\\"uint256\\",\\"name\\":\\"newValue\\",\\"type\\":\\"uint256\\"}],\\"name\\":\\"set\\",\\"outputs\\":[],\\"stateMutability\\":\\"nonpayable\\",\\"type\\":\\"function\\"}],\\"devdoc\\":{\\"kind\\":\\"dev\\",\\"methods\\":{},\\"version\\":1},\\"userdoc\\":{\\"kind\\":\\"user\\",\\"methods\\":{},\\"version\\":1}},\\"settings\\":{\\"compilationTarget\\":{\\"project:/contracts/SimpleStorage.sol\\":\\"SimpleStorage\\"},\\"evmVersion\\":\\"london\\",\\"libraries\\":{},\\"metadata\\":{\\"bytecodeHash\\":\\"ipfs\\"},\\"optimizer\\":{\\"enabled\\":false,\\"runs\\":200},\\"remappings\\":[]},\\"sources\\":{\\"project:/contracts/SimpleStorage.sol\\":{\\"keccak256\\":\\"0x06c1252ef15af0c7088b12e5647ccac1177580b0dc3e6c4fc39a77fb7b7d363e\\",\\"license\\":\\"MIT\\",\\"urls\\":[\\"bzz-raw://d2b55d2f62f090d5dcf7b3b4b3691172be04726ea2fc1ea92150a89f6c52259d\\",\\"dweb:/ipfs/QmQZ9KzsgmqnP2ao2ejmL6KGC75MkMq2eh4iVVRNEgwKtx\\"]}},\\"version\\":1}","bytecode":"0x608060405234801561001057600080fd5b506101f3806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806360fe47b11461003b5780636d4ce63c14610057575b600080fd5b610055600480360381019061005091906100fc565b610075565b005b61005f6100b8565b60405161006c9190610138565b60405180910390f35b806000819055507f1eed54b9f37e92cb92341631cd7841abb491f394ecbbc01bf746657acf4b9cfa81336040516100ad929190610194565b60405180910390a150565b60008054905090565b600080fd5b6000819050919050565b6100d9816100c6565b81146100e457600080fd5b50565b6000813590506100f6816100d0565b92915050565b600060208284031215610112576101116100c1565b5b6000610120848285016100e7565b91505092915050565b610132816100c6565b82525050565b600060208201905061014d6000830184610129565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061017e82610153565b9050919050565b61018e81610173565b82525050565b60006040820190506101a96000830185610129565b6101b66020830184610185565b939250505056fea264697066735822122042513c04bbbac1f4dc99d53182fe9b0c42b5c5c2f9a46d5f942c9d04997225c964736f6c634300080e0033","deployedBytecode":"0x608060405234801561001057600080fd5b50600436106100365760003560e01c806360fe47b11461003b5780636d4ce63c14610057575b600080fd5b610055600480360381019061005091906100fc565b610075565b005b61005f6100b8565b60405161006c9190610138565b60405180910390f35b806000819055507f1eed54b9f37e92cb92341631cd7841abb491f394ecbbc01bf746657acf4b9cfa81336040516100ad929190610194565b60405180910390a150565b60008054905090565b600080fd5b6000819050919050565b6100d9816100c6565b81146100e457600080fd5b50565b6000813590506100f6816100d0565b92915050565b600060208284031215610112576101116100c1565b5b6000610120848285016100e7565b91505092915050565b610132816100c6565b82525050565b600060208201905061014d6000830184610129565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061017e82610153565b9050919050565b61018e81610173565b82525050565b60006040820190506101a96000830185610129565b6101b66020830184610185565b939250505056fea264697066735822122042513c04bbbac1f4dc99d53182fe9b0c42b5c5c2f9a46d5f942c9d04997225c964736f6c634300080e0033","immutableReferences":{},"generatedSources":[],"deployedGeneratedSources":[{"ast":{"nodeType":"YulBlock","src":"0:2070:1","statements":[{"body":{"nodeType":"YulBlock","src":"47:35:1","statements":[{"nodeType":"YulAssignment","src":"57:19:1","value":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"73:2:1","type":"","value":"64"}],"functionName":{"name":"mload","nodeType":"YulIdentifier","src":"67:5:1"},"nodeType":"YulFunctionCall","src":"67:9:1"},"variableNames":[{"name":"memPtr","nodeType":"YulIdentifier","src":"57:6:1"}]}]},"name":"allocate_unbounded","nodeType":"YulFunctionDefinition","returnVariables":[{"name":"memPtr","nodeType":"YulTypedName","src":"40:6:1","type":""}],"src":"7:75:1"},{"body":{"nodeType":"YulBlock","src":"177:28:1","statements":[{"expression":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"194:1:1","type":"","value":"0"},{"kind":"number","nodeType":"YulLiteral","src":"197:1:1","type":"","value":"0"}],"functionName":{"name":"revert","nodeType":"YulIdentifier","src":"187:6:1"},"nodeType":"YulFunctionCall","src":"187:12:1"},"nodeType":"YulExpressionStatement","src":"187:12:1"}]},"name":"revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b","nodeType":"YulFunctionDefinition","src":"88:117:1"},{"body":{"nodeType":"YulBlock","src":"300:28:1","statements":[{"expression":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"317:1:1","type":"","value":"0"},{"kind":"number","nodeType":"YulLiteral","src":"320:1:1","type":"","value":"0"}],"functionName":{"name":"revert","nodeType":"YulIdentifier","src":"310:6:1"},"nodeType":"YulFunctionCall","src":"310:12:1"},"nodeType":"YulExpressionStatement","src":"310:12:1"}]},"name":"revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db","nodeType":"YulFunctionDefinition","src":"211:117:1"},{"body":{"nodeType":"YulBlock","src":"379:32:1","statements":[{"nodeType":"YulAssignment","src":"389:16:1","value":{"name":"value","nodeType":"YulIdentifier","src":"400:5:1"},"variableNames":[{"name":"cleaned","nodeType":"YulIdentifier","src":"389:7:1"}]}]},"name":"cleanup_t_uint256","nodeType":"YulFunctionDefinition","parameters":[{"name":"value","nodeType":"YulTypedName","src":"361:5:1","type":""}],"returnVariables":[{"name":"cleaned","nodeType":"YulTypedName","src":"371:7:1","type":""}],"src":"334:77:1"},{"body":{"nodeType":"YulBlock","src":"460:79:1","statements":[{"body":{"nodeType":"YulBlock","src":"517:16:1","statements":[{"expression":{"arguments":[{"kind":"number","nodeType":"YulLiteral","src":"526:1:1","type":"","value":"0"},{"kind":"number","nodeType":"YulLiteral","src":"529:1:1","type":"","value":"0"}],"functionName":{"name":"revert","nodeType":"YulIdentifier","src":"519:6:1"},"nodeType":"YulFunctionCall","src":"519:12:1"},"nodeType":"YulExpressionStatement","src":"519:12:1"}]},"condition":{"arguments":[{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"483:5:1"},{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"508:5:1"}],"functionName":{"name":"cleanup_t_uint256","nodeType":"YulIdentifier","src":"490:17:1"},"nodeType":"YulFunctionCall","src":"490:24:1"}],"functionName":{"name":"eq","nodeType":"YulIdentifier","src":"480:2:1"},"nodeType":"YulFunctionCall","src":"480:35:1"}],"functionName":{"name":"iszero","nodeType":"YulIdentifier","src":"473:6:1"},"nodeType":"YulFunctionCall","src":"473:43:1"},"nodeType":"YulIf","src":"470:63:1"}]},"name":"validator_revert_t_uint256","nodeType":"YulFunctionDefinition","parameters":[{"name":"value","nodeType":"YulTypedName","src":"453:5:1","type":""}],"src":"417:122:1"},{"body":{"nodeType":"YulBlock","src":"597:87:1","statements":[{"nodeType":"YulAssignment","src":"607:29:1","value":{"arguments":[{"name":"offset","nodeType":"YulIdentifier","src":"629:6:1"}],"functionName":{"name":"calldataload","nodeType":"YulIdentifier","src":"616:12:1"},"nodeType":"YulFunctionCall","src":"616:20:1"},"variableNames":[{"name":"value","nodeType":"YulIdentifier","src":"607:5:1"}]},{"expression":{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"672:5:1"}],"functionName":{"name":"validator_revert_t_uint256","nodeType":"YulIdentifier","src":"645:26:1"},"nodeType":"YulFunctionCall","src":"645:33:1"},"nodeType":"YulExpressionStatement","src":"645:33:1"}]},"name":"abi_decode_t_uint256","nodeType":"YulFunctionDefinition","parameters":[{"name":"offset","nodeType":"YulTypedName","src":"575:6:1","type":""},{"name":"end","nodeType":"YulTypedName","src":"583:3:1","type":""}],"returnVariables":[{"name":"value","nodeType":"YulTypedName","src":"591:5:1","type":""}],"src":"545:139:1"},{"body":{"nodeType":"YulBlock","src":"756:263:1","statements":[{"body":{"nodeType":"YulBlock","src":"802:83:1","statements":[{"expression":{"arguments":[],"functionName":{"name":"revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b","nodeType":"YulIdentifier","src":"804:77:1"},"nodeType":"YulFunctionCall","src":"804:79:1"},"nodeType":"YulExpressionStatement","src":"804:79:1"}]},"condition":{"arguments":[{"arguments":[{"name":"dataEnd","nodeType":"YulIdentifier","src":"777:7:1"},{"name":"headStart","nodeType":"YulIdentifier","src":"786:9:1"}],"functionName":{"name":"sub","nodeType":"YulIdentifier","src":"773:3:1"},"nodeType":"YulFunctionCall","src":"773:23:1"},{"kind":"number","nodeType":"YulLiteral","src":"798:2:1","type":"","value":"32"}],"functionName":{"name":"slt","nodeType":"YulIdentifier","src":"769:3:1"},"nodeType":"YulFunctionCall","src":"769:32:1"},"nodeType":"YulIf","src":"766:119:1"},{"nodeType":"YulBlock","src":"895:117:1","statements":[{"nodeType":"YulVariableDeclaration","src":"910:15:1","value":{"kind":"number","nodeType":"YulLiteral","src":"924:1:1","type":"","value":"0"},"variables":[{"name":"offset","nodeType":"YulTypedName","src":"914:6:1","type":""}]},{"nodeType":"YulAssignment","src":"939:63:1","value":{"arguments":[{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"974:9:1"},{"name":"offset","nodeType":"YulIdentifier","src":"985:6:1"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"970:3:1"},"nodeType":"YulFunctionCall","src":"970:22:1"},{"name":"dataEnd","nodeType":"YulIdentifier","src":"994:7:1"}],"functionName":{"name":"abi_decode_t_uint256","nodeType":"YulIdentifier","src":"949:20:1"},"nodeType":"YulFunctionCall","src":"949:53:1"},"variableNames":[{"name":"value0","nodeType":"YulIdentifier","src":"939:6:1"}]}]}]},"name":"abi_decode_tuple_t_uint256","nodeType":"YulFunctionDefinition","parameters":[{"name":"headStart","nodeType":"YulTypedName","src":"726:9:1","type":""},{"name":"dataEnd","nodeType":"YulTypedName","src":"737:7:1","type":""}],"returnVariables":[{"name":"value0","nodeType":"YulTypedName","src":"749:6:1","type":""}],"src":"690:329:1"},{"body":{"nodeType":"YulBlock","src":"1090:53:1","statements":[{"expression":{"arguments":[{"name":"pos","nodeType":"YulIdentifier","src":"1107:3:1"},{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"1130:5:1"}],"functionName":{"name":"cleanup_t_uint256","nodeType":"YulIdentifier","src":"1112:17:1"},"nodeType":"YulFunctionCall","src":"1112:24:1"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"1100:6:1"},"nodeType":"YulFunctionCall","src":"1100:37:1"},"nodeType":"YulExpressionStatement","src":"1100:37:1"}]},"name":"abi_encode_t_uint256_to_t_uint256_fromStack","nodeType":"YulFunctionDefinition","parameters":[{"name":"value","nodeType":"YulTypedName","src":"1078:5:1","type":""},{"name":"pos","nodeType":"YulTypedName","src":"1085:3:1","type":""}],"src":"1025:118:1"},{"body":{"nodeType":"YulBlock","src":"1247:124:1","statements":[{"nodeType":"YulAssignment","src":"1257:26:1","value":{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"1269:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"1280:2:1","type":"","value":"32"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"1265:3:1"},"nodeType":"YulFunctionCall","src":"1265:18:1"},"variableNames":[{"name":"tail","nodeType":"YulIdentifier","src":"1257:4:1"}]},{"expression":{"arguments":[{"name":"value0","nodeType":"YulIdentifier","src":"1337:6:1"},{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"1350:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"1361:1:1","type":"","value":"0"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"1346:3:1"},"nodeType":"YulFunctionCall","src":"1346:17:1"}],"functionName":{"name":"abi_encode_t_uint256_to_t_uint256_fromStack","nodeType":"YulIdentifier","src":"1293:43:1"},"nodeType":"YulFunctionCall","src":"1293:71:1"},"nodeType":"YulExpressionStatement","src":"1293:71:1"}]},"name":"abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed","nodeType":"YulFunctionDefinition","parameters":[{"name":"headStart","nodeType":"YulTypedName","src":"1219:9:1","type":""},{"name":"value0","nodeType":"YulTypedName","src":"1231:6:1","type":""}],"returnVariables":[{"name":"tail","nodeType":"YulTypedName","src":"1242:4:1","type":""}],"src":"1149:222:1"},{"body":{"nodeType":"YulBlock","src":"1422:81:1","statements":[{"nodeType":"YulAssignment","src":"1432:65:1","value":{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"1447:5:1"},{"kind":"number","nodeType":"YulLiteral","src":"1454:42:1","type":"","value":"0xffffffffffffffffffffffffffffffffffffffff"}],"functionName":{"name":"and","nodeType":"YulIdentifier","src":"1443:3:1"},"nodeType":"YulFunctionCall","src":"1443:54:1"},"variableNames":[{"name":"cleaned","nodeType":"YulIdentifier","src":"1432:7:1"}]}]},"name":"cleanup_t_uint160","nodeType":"YulFunctionDefinition","parameters":[{"name":"value","nodeType":"YulTypedName","src":"1404:5:1","type":""}],"returnVariables":[{"name":"cleaned","nodeType":"YulTypedName","src":"1414:7:1","type":""}],"src":"1377:126:1"},{"body":{"nodeType":"YulBlock","src":"1554:51:1","statements":[{"nodeType":"YulAssignment","src":"1564:35:1","value":{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"1593:5:1"}],"functionName":{"name":"cleanup_t_uint160","nodeType":"YulIdentifier","src":"1575:17:1"},"nodeType":"YulFunctionCall","src":"1575:24:1"},"variableNames":[{"name":"cleaned","nodeType":"YulIdentifier","src":"1564:7:1"}]}]},"name":"cleanup_t_address","nodeType":"YulFunctionDefinition","parameters":[{"name":"value","nodeType":"YulTypedName","src":"1536:5:1","type":""}],"returnVariables":[{"name":"cleaned","nodeType":"YulTypedName","src":"1546:7:1","type":""}],"src":"1509:96:1"},{"body":{"nodeType":"YulBlock","src":"1676:53:1","statements":[{"expression":{"arguments":[{"name":"pos","nodeType":"YulIdentifier","src":"1693:3:1"},{"arguments":[{"name":"value","nodeType":"YulIdentifier","src":"1716:5:1"}],"functionName":{"name":"cleanup_t_address","nodeType":"YulIdentifier","src":"1698:17:1"},"nodeType":"YulFunctionCall","src":"1698:24:1"}],"functionName":{"name":"mstore","nodeType":"YulIdentifier","src":"1686:6:1"},"nodeType":"YulFunctionCall","src":"1686:37:1"},"nodeType":"YulExpressionStatement","src":"1686:37:1"}]},"name":"abi_encode_t_address_to_t_address_fromStack","nodeType":"YulFunctionDefinition","parameters":[{"name":"value","nodeType":"YulTypedName","src":"1664:5:1","type":""},{"name":"pos","nodeType":"YulTypedName","src":"1671:3:1","type":""}],"src":"1611:118:1"},{"body":{"nodeType":"YulBlock","src":"1861:206:1","statements":[{"nodeType":"YulAssignment","src":"1871:26:1","value":{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"1883:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"1894:2:1","type":"","value":"64"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"1879:3:1"},"nodeType":"YulFunctionCall","src":"1879:18:1"},"variableNames":[{"name":"tail","nodeType":"YulIdentifier","src":"1871:4:1"}]},{"expression":{"arguments":[{"name":"value0","nodeType":"YulIdentifier","src":"1951:6:1"},{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"1964:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"1975:1:1","type":"","value":"0"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"1960:3:1"},"nodeType":"YulFunctionCall","src":"1960:17:1"}],"functionName":{"name":"abi_encode_t_uint256_to_t_uint256_fromStack","nodeType":"YulIdentifier","src":"1907:43:1"},"nodeType":"YulFunctionCall","src":"1907:71:1"},"nodeType":"YulExpressionStatement","src":"1907:71:1"},{"expression":{"arguments":[{"name":"value1","nodeType":"YulIdentifier","src":"2032:6:1"},{"arguments":[{"name":"headStart","nodeType":"YulIdentifier","src":"2045:9:1"},{"kind":"number","nodeType":"YulLiteral","src":"2056:2:1","type":"","value":"32"}],"functionName":{"name":"add","nodeType":"YulIdentifier","src":"2041:3:1"},"nodeType":"YulFunctionCall","src":"2041:18:1"}],"functionName":{"name":"abi_encode_t_address_to_t_address_fromStack","nodeType":"YulIdentifier","src":"1988:43:1"},"nodeType":"YulFunctionCall","src":"1988:72:1"},"nodeType":"YulExpressionStatement","src":"1988:72:1"}]},"name":"abi_encode_tuple_t_uint256_t_address__to_t_uint256_t_address__fromStack_reversed","nodeType":"YulFunctionDefinition","parameters":[{"name":"headStart","nodeType":"YulTypedName","src":"1825:9:1","type":""},{"name":"value1","nodeType":"YulTypedName","src":"1837:6:1","type":""},{"name":"value0","nodeType":"YulTypedName","src":"1845:6:1","type":""}],"returnVariables":[{"name":"tail","nodeType":"YulTypedName","src":"1856:4:1","type":""}],"src":"1735:332:1"}]},"contents":"{\\n\\n    function allocate_unbounded() -> memPtr {\\n        memPtr := mload(64)\\n    }\\n\\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\\n        revert(0, 0)\\n    }\\n\\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\\n        revert(0, 0)\\n    }\\n\\n    function cleanup_t_uint256(value) -> cleaned {\\n        cleaned := value\\n    }\\n\\n    function validator_revert_t_uint256(value) {\\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\\n    }\\n\\n    function abi_decode_t_uint256(offset, end) -> value {\\n        value := calldataload(offset)\\n        validator_revert_t_uint256(value)\\n    }\\n\\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\\n\\n        {\\n\\n            let offset := 0\\n\\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\\n        }\\n\\n    }\\n\\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\\n        mstore(pos, cleanup_t_uint256(value))\\n    }\\n\\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\\n        tail := add(headStart, 32)\\n\\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\\n\\n    }\\n\\n    function cleanup_t_uint160(value) -> cleaned {\\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\\n    }\\n\\n    function cleanup_t_address(value) -> cleaned {\\n        cleaned := cleanup_t_uint160(value)\\n    }\\n\\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\\n        mstore(pos, cleanup_t_address(value))\\n    }\\n\\n    function abi_encode_tuple_t_uint256_t_address__to_t_uint256_t_address__fromStack_reversed(headStart , value1, value0) -> tail {\\n        tail := add(headStart, 64)\\n\\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\\n\\n        abi_encode_t_address_to_t_address_fromStack(value1,  add(headStart, 32))\\n\\n    }\\n\\n}\\n","id":1,"language":"Yul","name":"#utility.yul"}],"sourceMap":"66:272:0:-:0;;;;;;;;;;;;;;;;;;;","deployedSourceMap":"66:272:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;228:108;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;156:68;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;228:108;280:8;272:5;:16;;;;299:32;310:8;320:10;299:32;;;;;;;:::i;:::-;;;;;;;;228:108;:::o;156:68::-;192:7;214:5;;207:12;;156:68;:::o;88:117:1:-;197:1;194;187:12;334:77;371:7;400:5;389:16;;334:77;;;:::o;417:122::-;490:24;508:5;490:24;:::i;:::-;483:5;480:35;470:63;;529:1;526;519:12;470:63;417:122;:::o;545:139::-;591:5;629:6;616:20;607:29;;645:33;672:5;645:33;:::i;:::-;545:139;;;;:::o;690:329::-;749:6;798:2;786:9;777:7;773:23;769:32;766:119;;;804:79;;:::i;:::-;766:119;924:1;949:53;994:7;985:6;974:9;970:22;949:53;:::i;:::-;939:63;;895:117;690:329;;;;:::o;1025:118::-;1112:24;1130:5;1112:24;:::i;:::-;1107:3;1100:37;1025:118;;:::o;1149:222::-;1242:4;1280:2;1269:9;1265:18;1257:26;;1293:71;1361:1;1350:9;1346:17;1337:6;1293:71;:::i;:::-;1149:222;;;;:::o;1377:126::-;1414:7;1454:42;1447:5;1443:54;1432:65;;1377:126;;;:::o;1509:96::-;1546:7;1575:24;1593:5;1575:24;:::i;:::-;1564:35;;1509:96;;;:::o;1611:118::-;1698:24;1716:5;1698:24;:::i;:::-;1693:3;1686:37;1611:118;;:::o;1735:332::-;1856:4;1894:2;1883:9;1879:18;1871:26;;1907:71;1975:1;1964:9;1960:17;1951:6;1907:71;:::i;:::-;1988:72;2056:2;2045:9;2041:18;2032:6;1988:72;:::i;:::-;1735:332;;;;;:::o","source":"// SPDX-License-Identifier: MIT\\npragma solidity >=0.4.22 <0.9.0;\\n\\ncontract SimpleStorage {\\n  uint256 value;\\n  event dataStored(uint data, address addr);\\n\\n  function get() public view returns (uint256) {\\n    return value;\\n  }\\n\\n  function set(uint256 newValue) public {\\n    value = newValue;\\n    emit dataStored(newValue, msg.sender);\\n  }\\n}\\n","sourcePath":"/home/jb/Projets/Alyra/React/truffle/contracts/SimpleStorage.sol","ast":{"absolutePath":"project:/contracts/SimpleStorage.sol","exportedSymbols":{"SimpleStorage":[34]},"id":35,"license":"MIT","nodeType":"SourceUnit","nodes":[{"id":1,"literals":["solidity",">=","0.4",".22","<","0.9",".0"],"nodeType":"PragmaDirective","src":"32:32:0"},{"abstract":false,"baseContracts":[],"canonicalName":"SimpleStorage","contractDependencies":[],"contractKind":"contract","fullyImplemented":true,"id":34,"linearizedBaseContracts":[34],"name":"SimpleStorage","nameLocation":"75:13:0","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":3,"mutability":"mutable","name":"value","nameLocation":"101:5:0","nodeType":"VariableDeclaration","scope":34,"src":"93:13:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":2,"name":"uint256","nodeType":"ElementaryTypeName","src":"93:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"},{"anonymous":false,"eventSelector":"1eed54b9f37e92cb92341631cd7841abb491f394ecbbc01bf746657acf4b9cfa","id":9,"name":"dataStored","nameLocation":"116:10:0","nodeType":"EventDefinition","parameters":{"id":8,"nodeType":"ParameterList","parameters":[{"constant":false,"id":5,"indexed":false,"mutability":"mutable","name":"data","nameLocation":"132:4:0","nodeType":"VariableDeclaration","scope":9,"src":"127:9:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":4,"name":"uint","nodeType":"ElementaryTypeName","src":"127:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"},{"constant":false,"id":7,"indexed":false,"mutability":"mutable","name":"addr","nameLocation":"146:4:0","nodeType":"VariableDeclaration","scope":9,"src":"138:12:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":6,"name":"address","nodeType":"ElementaryTypeName","src":"138:7:0","stateMutability":"nonpayable","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"visibility":"internal"}],"src":"126:25:0"},"src":"110:42:0"},{"body":{"id":16,"nodeType":"Block","src":"201:23:0","statements":[{"expression":{"id":14,"name":"value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":3,"src":"214:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":13,"id":15,"nodeType":"Return","src":"207:12:0"}]},"functionSelector":"6d4ce63c","id":17,"implemented":true,"kind":"function","modifiers":[],"name":"get","nameLocation":"165:3:0","nodeType":"FunctionDefinition","parameters":{"id":10,"nodeType":"ParameterList","parameters":[],"src":"168:2:0"},"returnParameters":{"id":13,"nodeType":"ParameterList","parameters":[{"constant":false,"id":12,"mutability":"mutable","name":"","nameLocation":"-1:-1:-1","nodeType":"VariableDeclaration","scope":17,"src":"192:7:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":11,"name":"uint256","nodeType":"ElementaryTypeName","src":"192:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"191:9:0"},"scope":34,"src":"156:68:0","stateMutability":"view","virtual":false,"visibility":"public"},{"body":{"id":32,"nodeType":"Block","src":"266:70:0","statements":[{"expression":{"id":24,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"id":22,"name":"value","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":3,"src":"272:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"id":23,"name":"newValue","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":19,"src":"280:8:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"272:16:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":25,"nodeType":"ExpressionStatement","src":"272:16:0"},{"eventCall":{"arguments":[{"id":27,"name":"newValue","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":19,"src":"310:8:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"expression":{"id":28,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":4294967281,"src":"320:3:0","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":29,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","src":"320:10:0","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_address","typeString":"address"}],"id":26,"name":"dataStored","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":9,"src":"299:10:0","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_uint256_$_t_address_$returns$__$","typeString":"function (uint256,address)"}},"id":30,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"299:32:0","tryCall":false,"typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":31,"nodeType":"EmitStatement","src":"294:37:0"}]},"functionSelector":"60fe47b1","id":33,"implemented":true,"kind":"function","modifiers":[],"name":"set","nameLocation":"237:3:0","nodeType":"FunctionDefinition","parameters":{"id":20,"nodeType":"ParameterList","parameters":[{"constant":false,"id":19,"mutability":"mutable","name":"newValue","nameLocation":"249:8:0","nodeType":"VariableDeclaration","scope":33,"src":"241:16:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":18,"name":"uint256","nodeType":"ElementaryTypeName","src":"241:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"visibility":"internal"}],"src":"240:18:0"},"returnParameters":{"id":21,"nodeType":"ParameterList","parameters":[],"src":"266:0:0"},"scope":34,"src":"228:108:0","stateMutability":"nonpayable","virtual":false,"visibility":"public"}],"scope":35,"src":"66:272:0","usedErrors":[]}],"src":"32:307:0"},"compiler":{"name":"solc","version":"0.8.14+commit.80d49f37.Emscripten.clang"},"networks":{"1657126504263":{"events":{},"links":{},"address":"0x1F850B87D710a82D38Fb1cEdb3983FC9c2101CD8","transactionHash":"0x43a613b14dabadf77f39ef097a26c238fc743646d34fcc39560a632b4cbe91ad"},"1657127448764":{"events":{},"links":{},"address":"0x3e2944A7E9b40e84C77Dd4ACd3eF53782c509b58","transactionHash":"0x2d434988a509f7d88800d2e34a8c5cf4e3dbd15404ce631b652761ba6780d6f8"},"1657210762709":{"events":{},"links":{},"address":"0xeC3F5B767135e588672f06D564F7cB0119739a56","transactionHash":"0x1b7d510db9011c3a3ea862cdac4cd43616e7cd9416237697a5f772af64f9a352"}},"schemaVersion":"3.4.7","updatedAt":"2022-07-07T16:33:59.052Z","networkType":"ethereum","devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}}')},221:function(e,n,t){},235:function(e,n){},237:function(e,n){},242:function(e,n){},243:function(e,n){},269:function(e,n){},271:function(e,n){},281:function(e,n){},283:function(e,n){},293:function(e,n){},295:function(e,n){},309:function(e,n){},412:function(e,n){},414:function(e,n){},419:function(e,n){},421:function(e,n){},428:function(e,n){},440:function(e,n){},443:function(e,n){},448:function(e,n){},533:function(e,n,t){},535:function(e,n,t){"use strict";t.r(n);var a=t(62),r=t(212),i=t.n(r),d=(t(221),t(21)),s=t(63),o=t(5),c=t(6),u=t(10),l=t(9),p=t(116),f=t(78),m=t.n(f),y=function(){return new Promise((function(e,n){window.addEventListener("load",Object(s.a)(Object(d.a)().mark((function t(){var a,r,i,s;return Object(d.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.ethereum){t.next=16;break}return a=new m.a(window.ethereum),t.prev=2,t.next=5,window.ethereum.enable();case 5:e(a),window.ethereum.on("disconnect",(function(){alert("il faut se connecter")})),window.ethereum.on("accountsChanged",(function(){window.location.reload()})),window.ethereum.on("chainChanged",(function(){window.location.reload()})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),n(t.t0);case 14:t.next=17;break;case 16:window.web3?(r=window.web3,console.log("Injected web3 detected."),e(r)):(i=new m.a.providers.HttpProvider("http://127.0.0.1:8545"),s=new m.a(i),console.log("No web3 instance injected, using Local web3."),e(s));case 17:case"end":return t.stop()}}),t,null,[[2,11]])}))))}))},b=(t(533),t(13)),T=function(e){Object(u.a)(t,e);var n=Object(l.a)(t);function t(){var e;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=n.call.apply(n,[this].concat(r))).state={storageValue:0,web3:null,accounts:null,contract:null,addresses:null},e.componentDidMount=Object(s.a)(Object(d.a)().mark((function n(){var t,a,r,i,s,o,c,u;return Object(d.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y();case 3:return t=n.sent,n.next=6,t.eth.getAccounts();case 6:return a=n.sent,n.next=9,t.eth.net.getId();case 9:return r=n.sent,i=p.networks[r],s=new t.eth.Contract(p.abi,i&&i.address),o={fromBlock:0,toBlock:"latest"},n.next=15,s.getPastEvents("dataStored",o);case 15:return c=n.sent,n.next=18,s.methods.get().call();case 18:u=n.sent,e.setState({storageValue:u,web3:t,accounts:a,contract:s,addresses:c}),n.next=26;break;case 22:n.prev=22,n.t0=n.catch(0),alert("Failed to load web3, accounts, or contract. Check console for details."),console.error(n.t0);case 26:case"end":return n.stop()}}),n,null,[[0,22]])}))),e.runSet=Object(s.a)(Object(d.a)().mark((function n(){var t,a,r,i,s,o,c;return Object(d.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.state,a=t.accounts,r=t.contract,i=document.getElementById("valeur").value,n.next=4,r.methods.set(i).send({from:a[0]});case 4:return n.next=6,r.methods.get().call();case 6:return s=n.sent,o={fromBlock:0,toBlock:"latest"},n.next=10,r.getPastEvents("dataStored",o);case 10:c=n.sent,e.setState({storageValue:s,addresses:c});case 12:case"end":return n.stop()}}),n)}))),e}return Object(c.a)(t,[{key:"render",value:function(){return this.state.web3?Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Good to Go!"}),Object(b.jsx)("p",{children:"Your Truffle Box is installed and ready."}),Object(b.jsx)("h2",{children:"Smart Contract Example"}),Object(b.jsxs)("div",{children:["The stored value is: ",this.state.storageValue]}),Object(b.jsx)("p",{children:"Try changing the value by setting it via the input:"}),Object(b.jsx)("input",{type:"text",id:"valeur"}),Object(b.jsx)("button",{onClick:this.runSet,children:"Set the value you wrote inside the blockchain"}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{children:"Here is the addresses that interacted with the contract, and the value they put"}),Object(b.jsx)("table",{children:this.state.addresses.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.returnValues.addr}),Object(b.jsx)("td",{children:e.returnValues.data})]})}))})]}):Object(b.jsx)("div",{children:"Loading Web3, accounts, and contract..."})}}]),t}(a.Component),_=T;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(b.jsx)(_,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[535,1,2]]]);
//# sourceMappingURL=main.dc603129.chunk.js.map