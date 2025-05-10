#include<bits/stdc++.h>
using namespace std;

void pr(int n){
    if(n==0) return; 
    
    pr(n-1);
    cout<<n<<endl;
}

int main(){
    pr(5);
    return 0;
}