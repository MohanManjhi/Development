#include<bits/stdc++.h>
using namespace std;

int Digitsum(int n){
    if(n==0) return 0;

    return (n%10)+Digitsum(n/10);
}

int Digitproduct(int n){
    if((n%10)==n) return n;

    return (n%10)*Digitproduct(n/10);
}

int main(){
    cout<<Digitsum(1234)<<endl;
    cout<<Digitproduct(505);

    return 0;
}