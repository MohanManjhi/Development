// #include<bits/stdc++.h>
// using namespace std;

// void pattern(int r, int c){
//     if(r==0){
//         return;
//     }
//     if(c<r){
//         pattern(r,c+1);
//         cout<<"*"<<" ";
//     }else{
//         pattern(r-1,0);
//         cout<<endl;
//     }
// }

// int main(){
//     pattern(4,0);
//     return 0;
// }

#include <bits/stdc++.h>
using namespace std;

void pattern(int r, int c, int n){
    if(r > n){
        return;
    }
    if(c < r){
        cout << "* ";
        pattern(r, c + 1, n);
    } else {
        cout << endl;
        pattern(r + 1, 0, n);
    }
}

int main(){
    int n = 4;
    pattern(1, 0, n);
    return 0;
}
