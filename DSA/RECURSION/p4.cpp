#include<bits/stdc++.h>
using namespace std;


vector<int> ans={};
vector<int> listIndex(vector<int> list, int target, int index) {
    if (index == list.size()) {
        return ans;
    }

    if (list[index] == target) {
        ans.push_back(index);
    }

    return listIndex(list,target,index+1);
}

int main(){
    vector<int> v = {1,2,4,6,2,4,6,5,8,9,12,16,18};
    vector<int> list = listIndex(v,4,0);
    for (int idx : list) {
        cout << idx << " ";
    }

    return 0;
}