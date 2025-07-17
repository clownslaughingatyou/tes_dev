// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

/*
一个mapping来存储候选人的得票数
一个vote函数，允许用户投票给某个候选人
一个getVotes函数，返回某个候选人的得票数
一个resetVotes函数，重置所有候选人的得票数
*/
contract Voting {
    mapping(string => uint256) public candidates;

    // 函数
    function vote(string memory candidate) public {
        candidates[candidate] += 1;
    }

    function getVotes(string memory candidate) public view returns (uint256) {
        return candidates[candidate];
    }

    function resetVotes(string memory candidate) public {
        delete candidates[candidate];
    }
}

// 反转
contract Rever {
    string public strText = "abcde";

    function rever(string memory s) public pure returns (string memory) {
        bytes memory strBytes = bytes(s);
        bytes memory reversed = new bytes(strBytes.length);

        for (uint256 i = 0; i < strBytes.length; i++) {
            reversed[i] = strBytes[strBytes.length - i - 1];
        }
        return string(reversed);
    }
}
