import React from "react";
import "./Codes.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function CodeUI() {
  const [index1, setIndex] = useState([]);
  const [mainIndex, setMainIndex] = useState([]);
  const topics = [
    "Arrays",
    "Matrix",
    "String",
    "SearchingSorting",
    "LinkedList",
    "BinaryTrees",
    "BinarySearchTrees",
    "Greedy",
    "Backtracking",
    "StacksandQueues",
    "Heap",
    "Graph",
    "Trie",
    "DynamicProgramming",
    "BitManipulation",
  ];
  const jsonCodes = {
    Arrays: [
      `#include<bits/stdc++.h>
    #define lli long long int
    using namespace std;
    
    void rightrotate(int arr[],int n, int outofplace, int curr){
        int temp = arr[curr];
        for(int i=curr;i>outofplace;i--)
            arr[i]=arr[i-1];
        arr[outofplace] = temp;
    }
    
    void printArray(int arr[],int n){
        for(int i=0;i<n;++i)
            cout<<arr[i]<<" ";
        cout<<"\n";
    }
    
    void rearrange(int arr[],int n){
        int outofplace=-1;
        for(int i=0;i<n;++i){
                if(outofplace==-1){
                    if(((arr[i]>=0) && !(i& 0x01)) || ((arr[i]<0) && (i & 0x01)))
                        outofplace=i;
                }
    
                if(outofplace>=0){
                    if((arr[i]>=0 && arr[outofplace]<0) || (arr[i]<0 && arr[outofplace]>=0)){
                        rightrotate(arr,n,outofplace,i);
                        
                        if(i-outofplace>1)
                            outofplace+=2;
                        else
                            outofplace=-1;
                    }
                }
        }
    }
    
    int main(){
        //int arr[n] = {-5, 3, 4, 5, -6, -2, 8, 9, -1, -4}; 
        //    //int arr[] = {-5, -3, -4, -5, -6, 2 , 8, 9, 1 , 4}; 
        //        //int arr[] = {5, 3, 4, 2, 1, -2 , -8, -9, -1 , -4}; 
                    //int arr[] = {-5, 3, -4, -7, -1, -2 , -8, -9, 1 , -4}; 
        int arr[] = {-5, -2, 5, 2, 4, 7, 1, 8, 0, -8}; 
        int n = sizeof(arr)/sizeof(arr[0]);                       
        cout<<"Given array is \n"; 
        printArray(arr, n);                                
        rearrange(arr, n);                                       
        cout<<"Rearranged array is \n"; 
        printArray(arr, n);
    }
    `,
      `#include <bits/stdc++.h>
    using namespace std;
    
    int findLongestConseqSubseq(int arr[], int n);
     
    // Driver program
    int main()
    {
     int  t,n,i,a[100001];
     cin>>t;
     while(t--)
     {
      cin>>n;
      for(i=0;i<n;i++)
      cin>>a[i];
      cout<<findLongestConseqSubseq(a, n)<<endl;
     }
          
        return 0;
    }// } Driver Code Ends
    
    
    // arr[] : the input array
    // N : size of the array arr[]
    
    // return the length of the longest subsequene of consecutive integers
    int findLongestConseqSubseq(int arr[], int N)
    {
      //Your code here
      unordered_set<int> s;
      for(int i=0;i<N;++i){
          s.insert(arr[i]);
      }
      int maxVal = 0;
      for(int i=0;i<N;++i){
          
            if(s.find(arr[i]-1)==s.end()){
                int j=arr[i];
                while(s.find(j)!=s.end())
                j++;
                maxVal = max(maxVal,j-arr[i]);
            }
      }
      return maxVal;
    }`,
      `#include<bits/stdc++.h>
    #define lli long long int
    using namespace std;
    
    struct eleCount{
        int e;
        int c;
    };
    
    void moreThanNdK(int arr[], int n, int k){
        if(k<2)
            return;
    
        struct eleCount temp[k-1];
        for(int i=0;i<k-1;i++)
            temp[i].c=0;
    
        for(int i=0;i<n;++i){
            int j;
            //if arr[i] is already present in elecount then increment the count
            for(j=0;j<k-1;j++){
                if(temp[j].e == arr[i]){
                    temp[j].c+=1;
                    break;
                }
            }
    
    
            //if not present then place arr[i] and set count =1
            if(j==k-1){
                int l;
    
                for(int l=0;l<k-1;l++){
                    if(temp[l].c==0){
                        temp[l].e = arr[l];
                        temp[l].c = 1;
                        break;
                    }
                }
                //if all positions in the eleCount are filled then decrease the count of each element by 1
                if(l==k-1){
                    for(l=0;l<k;l++)
                        temp[l].c-=1;
                }
            }
        }
            
            //Check actual counts of potential candidates in temp[]
            for(int i=0;i<k-1; i++){
                int ac=0;
                for(int j=0;j<n;j++){
                    if(arr[j]==temp[i].e)
                        ac++;
                }
                if(ac>(n/k))
                    cout<<"Number:"<<temp[i].e<<"Count: "<<ac<<endl;
        }
    
    }
    
    int main(){
        cout << "First Test\n"; 
        int arr1[] = { 4, 5, 6, 7, 8, 4, 4 }; 
        int size = sizeof(arr1) / sizeof(arr1[0]); 
        int k = 3; 
        moreThanNdK(arr1, size, k);          
        cout<<"\nSecond Test\n"; 
        int arr2[] = { 4, 2, 2, 7 }; 
        size = sizeof(arr2) / sizeof(arr2[0]); 
        k = 3; 
        moreThanNdK(arr2, size, k); 
        cout<<"\nThird Test\n"; 
        int arr3[] = { 2, 7, 2 }; 
        size = sizeof(arr3) / sizeof(arr3[0]); 
        k = 2; 
        moreThanNdK(arr3, size, k); 
        cout<<"\nFourth Test\n"; 
        int arr4[] = { 2, 3, 3, 2 }; 
        size = sizeof(arr4)/sizeof(arr4[0]); 
        k = 3; 
        moreThanNdK(arr4, size, k); 
        return 0;
    }
    `,
      `#include<bits/stdc++.h>
    #define lli long long int
    using namespace std;
    
    int main(){
        lli a[10]={1,0,1,2,0,0,0,2,2,1};
        lli low=0,mid=0,high=9;
         
        while(mid<high){
            switch(a[mid]){
                case 0:
                    swap(a[mid++],a[low++]);
                    break;
                case 1:
                    mid++;
                    break;
                case 2:
                    swap(a[mid],a[high--]);
                    break;
            }
        }
        for(int i=0;i<10;++i)
        cout<<a[i]<<" ";
    }
    `,
      `#include<bits/stdc++.h>
    #define lli long long int
    #define MAX 1000
    using namespace std;
    
    int multiply(int res[],int r_size,int x){
        
        int carry=0;
        for(int i=0;i<r_size;++i){
            
            int mul = (res[i]*x) + carry;
            carry = mul/10;
            res[i]=mul%10;
    
        }
    
        while(carry){
            res[r_size]=carry%10;
            carry=carry/10;
            r_size++;
        }
    
        return r_size;
    
    }
    
    void factorial(int num){
        
        int res[MAX];
    
        res[0]=1;
    
        int r_size =1;
    
        for(int i=2;i<=num;i++){
            r_size = multiply(res,r_size,i);
        }
    
        for(int i=r_size-1;i>=0;i--){
            cout<<res[i];
        }
    
        cout<<"\n";
    
    }
    
    int main(){
    
        factorial(100);
    return 0;
    }
    `,
      `	// Function to find maximum product subarray
	long long maxProduct(int *arr, int n) {
	    // code here
	    long long minVal=arr[0];
	    long long  maxVal=arr[0];
	    long long maxProd = arr[0];
	    for(int i=1;i<n;++i){
	        if(arr[i]<0)
	        swap(minVal,maxVal);
	        
	        minVal = min((long long)arr[i], minVal*(long long)arr[i]);
	        maxVal = max((long long)arr[i], maxVal*(long long)arr[i]);
	        maxProd = max(maxProd,maxVal);
	        
	    }
	   return maxProd;
    }`,
      `#include<bits/stdc++.h>
      #define lli long long int
      using namespace std;
      
      int max(int x,int y){
          return x>y?x:y;
      }
      
      int minJumps(int arr[],int n){
          
          if(arr[0]==0)
              return -1;
      
          int maxReach,jump,steps;
      
          maxReach = arr[0];
      
          steps=arr[0];
          jump = 1;
      
          for(int i=1;i<n;++i){
              if(i==arr[n-1])
                  return jump;
      
              maxReach = max(maxReach, i+arr[i]);
      
              steps--;
      
              if(steps == 0){
                  jump++;
                  if(i>=maxReach)
                      return -1;
                  steps = maxReach -i;
              }
          }
      
          return -1;
      
      }
      
      int main(){
          int arr[] = { 1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9 }; 
              int size = sizeof(arr) / sizeof(int); 
                
                  // Calling the minJumps function 
              cout << ("Minimum number of jumps to reach end is %d ", 
              minJumps(arr, size));
              return 0; 
      }
      `,
      `class Solution {
        public:
            int maxProfit(vector<int>& prices) {
                int maxP=0,minP=INT_MAX,n=prices.size();
                for(int i=0;i<n;++i){
                    if(prices[i]<minP)
                        minP=prices[i];
                    else if(prices[i]-minP>maxP)
                        maxP=prices[i]-minP;
                }
                return maxP;
            }
        };`,
      `    public:    
        vector <int> commonElements (int A[], int B[], int C[], int n1, int n2, int n3)
         {
             //code here
             vector<int> v;
            int i=0,j=0,k=0;
            while(i<n1 && j<n2 && k<n3){
                if(A[i]==B[j] && B[j]==C[k]){
                    v.push_back(A[i]);
                    ++i;++j;++k;
                    continue;
                }
                else if(A[i]<B[j])
                ++i;
                else if(B[j]<C[k])
                ++j;
                else
                ++k;
            }
            vector<int>::iterator ip;
            ip = unique(v.begin(),v.end());
            v.resize(distance(v.begin(),ip));
            return v;
         }
 
 };`,
      `#include <bits/stdc++.h>
 using namespace std;
 
 
  // } Driver Code Ends
 
 
 // Function to find inversion count in the array
 
 // arr[]: Input Array
 // N : Size of the Array arr[]
 
 long long int merge(long long arr[],long long temp[],long long int left, long long int mid, long long int right){
     
     long long int i = left,j=mid,k=left,inv_count=0;
     
     while((i<=mid-1) && (j<=right)){
         
         if(arr[i]<=arr[j]){
             temp[k++]=arr[i++];
         }else{
             temp[k++]=arr[j++];
             inv_count = inv_count+(mid-i);
         }
     }
     
     while(i<=mid-1)
     temp[k++]=arr[i++];
     while(j<=right)
     temp[k++]=arr[j++];
     
     for(long long int i=left;i<=right;++i){
         arr[i]=temp[i];
     }
     return inv_count;
     
 }
 
 long long int _mergeSort(long long arr[],long long temp[], long long int left, long long int right){
     long long int mid,inv_count=0;
     
     if(right>left){
         mid = (left+right)/2;
         inv_count+= _mergeSort(arr,temp,left,mid);
         inv_count+= _mergeSort(arr,temp,mid+1,right);
         inv_count+= merge(arr,temp,left,mid+1,right);
     }
     return inv_count;
 }
 
 long long int inversionCount(long long arr[], long long N)
 {
     long long temp[N];
     return _mergeSort(arr,temp,0,N-1);
 }
 
 
 // { Driver Code Starts.
 
 int main() {
     
     long long T;
     cin >> T;
     
     while(T--){
         long long N;
         cin >> N;
         
         long long A[N];
         for(long long i = 0;i<N;i++){
             cin >> A[i];
         }
         
         cout << inversionCount(A,N) << endl;
     }
     
     return 0;
 }
   // }`,
      `class Solution {
    public:
        void nextPermutation(vector<int>& nums) {
            int s= nums.size();
            int index,st=0,flag=0;
            for(int i=s-1;i>0;i--){
                if(nums[i]>nums[i-1]){
                    st=i;
                    int min1=INT_MAX;
                    int index=0;
                    for(int j=i;j<s;++j){
                        if(nums[j]<min1 && nums[j]>nums[i-1]){
                            min1=nums[j];
                            index=j;
                        }
                    }
                    swap(nums[i-1],nums[index]);
                    flag=1;
                    break;
                }
            }
            if(flag==1){
                sort(nums.begin()+st,nums.end());
            }else{
                sort(nums.begin(),nums.end());
            }
        }
    };`,
    ],
    Matrix: [],
    String: [],
    SearchingSorting: [],
    LinkedList: [],
    BinaryTrees: [
      `#include<bits/stdc++.h>
    using namespace std;
    struct Node{
        int data;
        Node* left;
        Node* right;
    
        Node(int val){
        data = val;
        left = NULL;
        right = NULL;
        }
    };
    
    void bfs(Node* root){
        if(root==NULL)
            return;
        queue<Node*> q;
        q.push(root);
        while(!q.empty()){
            Node *x = q.front();
            q.pop();
            cout<<x->data<<" ";
            if(x->left!=NULL)
            q.push(x->left);
            if(x->right!=NULL)
            q.push(x->right);
        }
    }
    int main(){
        Node *root = new Node(10);
        root->right = new Node(6);
        root->right->left = new Node(2);
        root->right->right = new Node(4);
        root->right->right->left = new Node(3);
        bfs(root);
    }
    `,
      `#include<bits/stdc++.h>
      using namespace std;
      struct Node{
          int data;
          Node* left;
          Node* right;
      
          Node(int val){
          data = val;
          left = NULL;
          right = NULL;
          }
      };
      
      int sizeofBT(Node* root){
          if(root==NULL)
              return 0;
          return sizeofBT(root->left)+sizeofBT(root->right)+1;
      }
      
      int main(){
          Node *root = new Node(10);
          root->left = new Node(80);
          root->right = new Node(70);
          root->left->left = new Node(30);
          int ans = sizeofBT(root);
          cout<<ans;
      } 
    `,
      `#include<bits/stdc++.h>
    #define lli long long int
    using namespace std;
    
    struct Node{
        int data;
        Node *left;
        Node *right;
        Node(int val){
            data  = val;
            left = NULL;
            right = NULL;
        }
    };    
    
    void insertn(Node* parent,int data,int side){
        if(side==0)
            parent->left = new Node(data);
        else
            parent->right = new Node(data);
    }
    void bfs(Node* root){
        if(root==NULL)
            return;
        stack<Node*> s1;
        stack<Node*> s2;
        s1.push(root);
        bool rs=false;
        while(!s1.empty() || !s2.empty()){
            if(!rs){
            Node* x = s1.top();
            s1.pop();
            cout<<x->data<<" ";
            //if not reverse push elements in s2 cause we can pop in reverse from it
            if(x->left!=NULL)
                s2.push(x->left);
            if(x->right!=NULL)
                s2.push(x->right);
            if(s1.empty())
                rs=!rs;
            }else{
                Node* x = s2.top();
                s2.pop();
                cout<<x->data<<" ";
                //if reverse push nodes in s1 vice versa
                if(x->right!=NULL)
                    s1.push(x->right);
                if(x->left!=NULL)
                    s1.push(x->left);
                if(s2.empty()){
                    rs=!rs;
                }
            }
        }
    }
    
    void bfs1(Node* root){
        if(root==NULL)
            return;
        queue<Node*> q;
        q.push(root);
        while(!q.empty()){
            Node* x = q.front();
            q.pop();
            cout<<x->data<<" ";
            if(x->left!=NULL)
                q.push(x->left);
            if(x->right!=NULL)
                q.push(x->right);
        }
    }
    
    int main(){ 
        Node *root = new Node(1);
        insertn(root,2,0);
        insertn(root,3,1);
        insertn(root->left,4,0);
        insertn(root->left,5,1);
        insertn(root->right,6,0);
        insertn(root->right,7,1);
        insertn(root->left->left,8,0);
        insertn(root->left->left,9,1);
        insertn(root->right->left,10,0);
        bfs1(root);
        cout<<"\n";
        bfs(root);
    }
    `,
      `#include<bits/stdc++.h>
    using namespace std;
    struct Node{
        int data;
        Node* left;
        Node* right;
    
        Node(int val){
            data=val;
            left=NULL;
            right=NULL;
        }
    };
    
    void linebfs(Node* root){
        if(root==NULL)
            return;
        queue<Node*> q;
        q.push(root);
        q.push(NULL);
        while(q.size()>1){
            Node* x = q.front();
            q.pop();
            if(x==NULL){
                q.push(NULL);
                cout<<"\n";
            }else{
            cout<<x->data<<" ";
            if(x->left!=NULL)
                q.push(x->left);
            if(x->right!=NULL)
                q.push(x->right);
            }
        }
    }
    int main(){
        Node *root = new Node(10);
        root->left = new Node(20);
        root->right = new Node(30);
        root->left->left = new Node(40);
        root->left->right = new Node(50);
        root->right->right = new Node(60);
        root->right->right->left = new Node(70);
        root->right->right->right = new Node(80);
        linebfs(root);
    }
    `,
      `#include<bits/stdc++.h>
    #define lli long long int
    using namespace std;
    
    struct Node{
        int data;
        Node *left;
        Node *right;
        Node(int val){
            data  = val;
            left = NULL;
            right = NULL;
        }
    };
    
    void insertn(Node* parent,int data,int side){
        if(side==0)
            parent->left = new Node(data);
        else
            parent->right = new Node(data);
    }
    
    void bfs(Node* root){
        if(root==NULL)
            return;
        queue<Node*> q;
        q.push(root);
        while(!q.empty()){
            Node* x = q.front();
            q.pop();
            cout<<x->data<<" ";
            if(x->left!=NULL)
                q.push(x->left);
            if(x->right!=NULL)
                q.push(x->right);
        }
    }
    int ipre = 0;
    //This is building binary tree using ordered traversals
    Node* btwithot(int in[],int pre[],int is,int ie){
        if(is>ie)
            return NULL;
        Node *root = new Node(pre[ipre++]);
        int index;
        for(int i=is;i<=ie;++i){
            if(root->data==in[i]){
                index=i;
                break;
            }
        }
        root->left= btwithot(in,pre,is,index-1);
        root->right= btwithot(in,pre,index+1,ie);
        return root;
    }
    
    int main(){
            int in[]={20,10,40,30,50};
            int pre[]={10,20,30,40,50};
            Node* root =  btwithot(in,pre,0,4);
            bfs(root);
    }
    `,
      `#include<bits/stdc++.h>
    using namespace std;
    struct Node{
        int data;
        Node *left;
        Node *right;
        Node(int val){
            data  = val;
            left = NULL;
            right = NULL;
        }
    };
    
    int height(Node* root){
        if(root==NULL)
            return 0;
        return max(height(root->left),height(root->right))+1;
    }
    
    bool checkbaltree(Node* root){
        if(root==NULL)
            return true;
        int heightL=0,heightR=0;
        if(root->left!=NULL)
            heightL=height(root->left);
        if(root->right!=NULL)
            heightR= height(root->right);
        return ((abs(heightL-heightR)<=1) && checkbaltree(root->left) && checkbaltree(root->right));
    }
    
    void insertn(Node* parent,int data,int side){
        if(side==0)
            parent->left = new Node(data);
        else
            parent->right = new Node(data);
    }
    int main(){
        Node* root = new Node(18);
        //insertn(root,40,0);
        insertn(root,20,1);
        insertn(root,4,0);
        insertn(root->right,70,1);
        insertn(root->right,13,0);
        //insertn(root->left->right,10,1);
        //insertn(root->right,5,0);
        bool x =checkbaltree(root);
        cout<<"Balance Tree check:"<<x<<endl;
    }
    `,
      `#include<bits/stdc++.h>
    #define lli long long int
    using namespace std;
    struct Node{
        int data;
        Node *left;
        Node *right;
        Node(int val){
            data  = val;
            left = NULL;
            right = NULL;
        }
    };
    void insertn(Node* parent,int data,int side){
        if(side==0)
            parent->left = new Node(data);
        else
            parent->right = new Node(data);
    }
    //check if it is a balanced tree in O(N)
    int checkbaltree(Node* root){
        if(root==NULL)
            return 0;
        int lh = checkbaltree(root->left);
        if(lh==-1)
            return -1;
        int rh = checkbaltree(root->right);
        if(rh==-1)
            return -1;
        if(abs(lh-rh)>1)
            return -1;
        else
            return max(lh,rh)+1;
    }
    
    int main(){
        Node* root = new Node(3);
        //insertn(root,40,0);
        insertn(root,5,0);
        insertn(root->left,4,0);
        //insertn(root->right,70,1);
        //insertn(root->right,13,0);
        //insertn(root->left->right,10,1);
        //insertn(root->right,5,0);
        int x =checkbaltree(root);
        if(x==-1)
        cout<<"Balance Tree check: False"<<endl;
        else
        cout<<"Balance Tree check: True"<<endl;
    }
    `,
      `#include<bits/stdc++.h>
    #define lli long long int
    using namespace std;
    struct Node{
        int data;
        Node *left;
        Node *right;
        Node(int val){
            data  = val;
            left = NULL;
            right = NULL;
        }
    };
    
    bool childrensum(Node* root){
        if(root==NULL)
            return true;
        if(root->left==NULL && root->right==NULL)
            return true;
        int sum =0;
        if(root->left!=NULL)
            sum += root->left->data;
        if(root->right!=NULL)
            sum += root->right->data;
        return (root->data==sum && childrensum(root->left) && childrensum(root->right));
    }
    
    
    int main(){
        Node *root = new Node(20);
        root->left = new Node(8);
        root->right = new Node(12);
        root->left->left = new Node(3);
        root->left->right = new Node(5);
        bool ans = childrensum(root);
    //    printbt(root);
        cout<<ans;
    }
    `,
      `#include<bits/stdc++.h>
    #define lli long long int
    using namespace std;
    
    struct Node{
        int data;
        Node *left;
        Node *right;
        Node(int val){
            data  = val;
            left = NULL;
            right = NULL;
        }
    };
    Node* previous = NULL;
    //inorder traversal of binary tree [Order after conversion to doubly linked list]
    Node* btodll(Node* root){
        if(root==NULL)
            return root;
        Node* head = btodll(root->left);
        if(previous==NULL)
            head = root;
        else{
            root->left = previous;
            previous->right = root;
        }
        previous = root;
        btodll(root->right);
        return head;
    }
    
    void printList(Node* head)
    {
      for ( ; head; head = head->right )
      {
        cout << head->data<<" ";
      }
    }
    
    void insertn(Node* parent,int data,int side){
        if(side==0)
            parent->left = new Node(data);
        else
            parent->right = new Node(data);
    }
    
    void bfs(Node* root){
        if(root==NULL)
            return;
        queue<Node*> q;
        q.push(root);
        while(!q.empty()){
            Node* x = q.front();
            q.pop();
            cout<<x->data<<" ";
            if(x->left!=NULL)
                q.push(x->left);
            if(x->right!=NULL)
                q.push(x->right);
        }
    }
    
    int main(){
        Node* prev = NULL;
        Node* root = new Node(10);
        insertn(root,5,0);
        insertn(root,20,1);
        insertn(root->right,30,0);
        insertn(root->right,35,1);
        bfs(root);
        cout<<"\n";
        Node* head = btodll(root);
        printList(head); 
    
    }
    `,

      `#include<bits/stdc++.h>
    #define lli long long int
    using namespace std;
    
    struct Node{
        int data;
        Node *left;
        Node *right;
        Node(int val){
            data  = val;
            left = NULL;
            right = NULL;
        }
    };
    unordered_map<Node*,int> uh;
    void insertn(Node* parent,int data,int side){
        if(side==0)
            parent->left = new Node(data);
        else
            parent->right = new Node(data);
    }
    int res=0;
    int diaHeight(Node* root){
        if(root==NULL)
            return 0;
        int lh = diaHeight(root->left);
        int rh = diaHeight(root->right);
        res = max(res,lh+rh+1);
        return 1+max(lh,rh);
    
    }
    int height(Node* root){
            if(root==NULL)
                return 0;
            int h = max(height(root->left),height(root->right))+1;
            uh[root]=h;
            return h;
    }
    //This has time complexity T(n)=T(n-1)+Theta(n)= O(n^2)
    /*
    int diameter(Node* root){
        if(root==NULL)
            return 0;
        int di =  height(root->left)+height(root->right)+1;
        int leftd = diameter(root->left);
        int rightd = diameter(root->right);
        return max(di,max(leftd,rightd));
    }
    */
    //This solution will give O(n) complexity
    int diameter(Node* root){
        if(root==NULL)
            return 0;
        int di =  uh[root->left]+uh[root->right]+1;
        int leftd = diameter(root->left);
        int rightd = diameter(root->right);
        return max(di,max(leftd,rightd));
    }
    void bfs(Node* root){
        if(root==NULL)
            return;
        queue<Node*> q;
        q.push(root);
        while(!q.empty()){
            Node* x = q.front();
            q.pop();
            cout<<x->data<<" ";
            if(x->left!=NULL)
                q.push(x->left);
            if(x->right!=NULL)
                q.push(x->right);
        }
    }
    
    int main(){ 
        Node *root = new Node(10);
        insertn(root,20,0);
        insertn(root,60,1);
        insertn(root->left,30,0);
        insertn(root->left,80,1);
        insertn(root->left->right,90,1);
        insertn(root->left->right->right,18,1);
        insertn(root->left->left,40,0);
        insertn(root->left->left,50,1);
        insertn(root->left->left->left,60,0);
        height(root);
        bfs(root);
        cout<<"\n";
        cout<<"Iterating over Unorder Map:\n";
        for(auto x : uh)
            cout<<x.first->data<<" "<<x.second<<" ";
        cout<<"\n";
        int di = diameter(root);
        cout<<"The diameter of the Binary Tree is: "<<di<<"\n";
        diaHeight(root);
        cout<<"The diameter of the Binary Tree without using extra O(n) space of Unorder Map is: "<<res<<"\n";
    }
    `,
      `#include<bits/stdc++.h>
    using namespace std;
    struct Node{
        int data;
        Node *left;
        Node *right;
    
        Node(int val){
        data = val;
        left = NULL;
        right = NULL;
        }
    };
    
    int height(Node* root){
        
        if(root==NULL)
            return 0;
        else
           return max(height(root->left),height(root->right))+1;
    }
    
    int main(){
        Node *root = new Node(10);
        root->left = new Node(8);
        root->right = new Node(30);
        root->right->left = new Node(40);
        root->right->right = new Node(50);
        root->right->right->right = new Node(60);
        int h = height(root);
        cout<<"Height of the Binary Tree is:"<<h;
    }
    `,
      `#include <bits/stdc++.h>
    #define lli long long int
    using namespace std;
    struct Node{
        int data;
        struct Node *left;
        struct Node *right;
    
        Node(int val){
            data = val;
            left = NULL;
            right = NULL;
        }
    };
    void inorder(Node* root){
        if(root==NULL)
            return;
        inorder(root->left);
        cout<<root->data<<"-->";
        inorder(root->right);
    }
    int main(){
            Node* root = new Node(10);
            root->left = new Node(20);
            root->right = new Node(30);
            root->right->right = new Node(50);
            root->right->left = new Node(40);
            inorder(root);
    }
    `,
      `#include<bits/stdc++.h>
    using namespace std;
    struct Node{
        int data;
        Node *left;
        Node *right;
    
        Node(int val){
        data = val;
        left = NULL;
        right = NULL;
        }
    };
    int maxlevel = 0;
    void leftview(Node* root,int level){
        if(root==NULL)
            return;
        if(maxlevel<level){
            cout<<root->data<<" ";
            maxlevel=level;
        }
        leftview(root->left,level+1);
        leftview(root->right,level+1);
    }
    
    int main(){
        Node *root = new Node(30);
        //root->left = new Node(20);
        //root->left->left= new Node(40);
        //root->left->right = new Node(50);
        root->right = new Node(50);
        root->right->left = new Node(60);
        root->right->left->right = new Node(10);
        leftview(root,1);
    }
    `,
      `#include<bits/stdc++.h>
    using namespace std;
    struct Node{
        int data;
        Node *left;
        Node *right;
    
        Node(int val){
            data = val;
            left = NULL;
            right = NULL;
        }
    };
    
    int maxinbt(Node* root){
        if(root==NULL)
            return INT_MIN;
        return max(root->data,max(maxinbt(root->left),maxinbt(root->right)));
    }
    
    int main(){
        Node *root = new Node(10);
        root->left = new Node(30);
        root->right = new Node(40);
        root->left->left = new Node(80);
        root->left->left->right = new Node(70);
        root->right->left = new Node(60);
        root->right->right = new Node(20);
        int x = maxinbt(root);
        cout<<"Maximum in Binary Tree is:"<<x;
    }
    `,
      `#include<bits/stdc++.h>
    #define lli long long int
    using namespace std;
    struct Node{
        int data;
        Node *left;
        Node *right;
        Node(int val){
            data  = val;
            left = NULL;
            right = NULL;
        }
    };
    
    void insertn(Node* parent,int data,int side){
        if(side==0)
            parent->left = new Node(data);
        else
            parent->right = new Node(data);
    }
    
    int maxwidth(Node* root){
        if(root==NULL)
            return 0;
        queue<Node*> q;
        q.push(root);
        int s = 1;
        while(!q.empty()){
            Node* x = q.front();
            q.pop();
            cout<<x->data<<" ";
            if(x->left!=NULL)
                q.push(x->left);
            if(x->right!=NULL)
                q.push(x->right);
            s = max(s,int(q.size()));
        }
        return s;
    }
    
    int main(){
        Node* root = new Node(3);
        insertn(root,40,0);
        insertn(root,5,1);
        insertn(root->left,4,0);
        insertn(root->left,4,1);
        insertn(root->right,70,1);
        //insertn(root->right,13,0);
        //insertn(root->left->right,10,1);
        //insertn(root->right,5,0);
        int x =maxwidth(root);
        cout<<"Maximum width of Binary Tree:"<<x<<endl;
    }
    `,
      `#include<bits/stdc++.h>
    using namespace std;
    struct Node{
        int data;
        Node *left;
        Node *right;
    
        Node(int val){
        data = val;
        left = NULL;
        right = NULL;
        }
    };
    
    void postorder(Node* root){
        if(root!=NULL){
        postorder(root->left);
        postorder(root->right);
        cout<<root->data<<"-->";
        }
    }
    
    int main(){
        Node *root = new Node(10);
        root->left = new Node(20);
        root->right = new Node(30);
        root->right->left = new Node(40);
        root->right->right = new Node(50);
        postorder(root);
    }
    `,
      `#include<bits/stdc++.h>
    using namespace std;
    struct Node{
        int data;
        Node *left;
        Node *right;
    
        Node(int val){
        data = val;
        left = NULL;
        right = NULL;
        }
    };
    void preorder(Node* root){
        if(root!=NULL){
        cout<<root->data<<"-->";
        preorder(root->left);
        preorder(root->right);
        }
    }
    int main(){
        Node *root = new Node(10);
        root->left = new Node(20);
        root->right = new Node(30);
        root->right->left = new Node(40);
        root->right->right = new Node(50);
        preorder(root);
    }
    `,
      `#include<bits/stdc++.h>
    using namespace std;
    struct Node{
        int data;
        Node *left;
        Node *right;
        
        Node(int val){
        data = val;
        left = NULL;
        right = NULL;
        }
    };
    
    void printK(Node* root,int k){
        if(root==NULL || k==-1)
            return;
        k--;
        if(k==-1)
            cout<<root->data<<" ";
        printK(root->left,k);
        printK(root->right,k);
    }
    
    int main(){
        //creating the tree
        Node *root = new Node(10);
        root->left = new Node(20);
        root->right = new Node(30);
        root->left->left = new Node(40);
        root->left->right = new Node(50);
        root->right->right = new Node(70);
        printK(root,2);
    }
    `,
    ],
    BinarySearchTrees: [],
    Greedy: [
      `#include<bits/stdc++.h>
    #define lli long long int
    using namespace std;
    
    int myCmp(pair<int,int> a, pair<int,int> b){
        return (a.second<b.second);
    }
    
    int maxActivities(pair<int,int> arr[],int n){
        sort(arr,arr+n,myCmp);
        int prev=0;
        int res=1;
        for(int curr=1;curr<n;curr++){
            if(arr[curr].first>=arr[prev].second){
                res++;
                prev=curr;
            }
        }
        return res;
    }
    
    int main(){
    
        pair<int,int> arr[3];
        arr[0].first = 12;
        arr[0].second=20;
        arr[1].first = 30;
        arr[1].second = 40;
        arr[2].first = 20;
        arr[2].second = 30;
        int res = maxActivities(arr,3);
        cout<<"The number of Maximum Activities possible are: "<<res<<endl;
    }
    `,
    ],
    Backtracking: [],
    StacksandQueues: [],
    Heap: [],
    Graph: [
      `#include<bits/stdc++.h>
    #define lli long long int
    using namespace std;
    
    void dfsrec(vector<int> v[],int s,bool visited[]){
        visited[s]=true;
        cout<<s<<" ";
        for(auto i:v[s]){
              if(visited[i]==false)
                  dfsrec(v,i,visited);
        }
    }
    
    void dfs(vector<int> v[],int s,int n){
        bool visited[n+1];
        for(int i=0;i<n;++i)
            visited[i]=false;
        dfsrec(v,s,visited);
    }
    
    void addEdge(vector<int> v[],int a,int b){
        v[a].push_back(b);
        v[b].push_back(a);
    }
    
    int main(){
        int n=5;
        vector<int> adj[n];
        addEdge(adj,0,1);
        addEdge(adj,0,2);
        addEdge(adj,2,3);
        addEdge(adj,1,3);
        addEdge(adj,3,4);
        addEdge(adj,1,4);
        dfs(adj,0,n);    
    }
    `,
      `#include<bits/stdc++.h>
    #define lli long long int
    using namespace std;
    
    void dfsrec(vector<int> v[],int s,bool visited[]){
        visited[s]=true;
        cout<<s<<" ";
        for(auto i:v[s]){
              if(visited[i]==false)
                  dfsrec(v,i,visited);
        }
    }
    
    int dfs(vector<int> v[],int n){
        bool visited[n+1];
        int count=0;
        for(int i=0;i<n;++i)
            visited[i]=false;
        for(int i=0;i<n;++i){
            if(visited[i]==false){
                dfsrec(v,i,visited);
                count++;
            }
        }
        return count;
    }
    
    void addEdge(vector<int> v[],int a,int b){
        v[a].push_back(b);
        v[b].push_back(a);
    }
    
    int main(){
        int n=5;
        vector<int> adj[n];
        addEdge(adj,0,1);
        addEdge(adj,1,2);
        addEdge(adj,0,2);
        addEdge(adj,3,4);
        int count = dfs(adj,n);
        cout<<"\n";
        cout<<"The Count of Connected Components in Undirected Disconnected Graph is: "<<count<<"\n";
    }
    `,
      `#include<bits/stdc++.h>
    #define lli long long int
    using namespace std;
    void addEdge(vector<int> v[],int a,int b){
        v[a].push_back(b);
        v[b].push_back(a);
    }
    void graphbfs(vector<int> adj[],int s,int v,bool visited[]){
        queue<int> q;
        q.push(s);
        visited[s]=true;
        while(!q.empty()){
            int u = q.front();
            q.pop();
            cout<<u<<" ";
            for(int v:adj[u]){
                if(visited[v]==false){
                    visited[v]=true;
                    q.push(v);
                }
            }
        }
    }
    int disgraphbfs(vector<int> v[],int s){
        bool visited[s];
        int c=0;
        for(int i=0;i<s;++i)
            visited[i]=false;
        for(int i=0;i<s;++i){
            if(visited[i]==false){
                c++;
                graphbfs(v,i,7,visited);
            }
        }
        return c;
    }
    
    int main(){
        vector<int> v[7];
        addEdge(v,0,1);
        addEdge(v,0,2);
        addEdge(v,1,3);
        addEdge(v,2,3);
        addEdge(v,4,5);
        addEdge(v,5,6);
        addEdge(v,6,4);
        //for calculating connected components
        int x = disgraphbfs(v,7);
        cout<<"\n"<<x;
    }
    `,
      `#include<bits/stdc++.h>
    #define lli long long int
    using namespace std; 
    void addEdge(vector<int> v[],int a,int b){
        v[a].push_back(b);
        v[b].push_back(a);
    }
    void graphdfs(vector<int> adj[],int v, int s){
        bool visited[v+1];
        for(int i=0;i<v;++i)
            visited[i]=false;
        queue<int> q;
        q.push(s);
        visited[s]=true;
        while(!q.empty()){
        int u = q.front();
        q.pop();
        cout<<u<<" ";
        for(int v:adj[u]){
            if(visited[v]==false){
            visited[v]=true;
            q.push(v);
            }
        }
        }
    }
    int main(){
        vector<int> v[5];
        addEdge(v,0,1);
        addEdge(v,0,2);
        addEdge(v,1,2);
        addEdge(v,1,3);
        addEdge(v,2,3);
        addEdge(v,2,4);
        addEdge(v,4,3);
        for(int i=0;i<5;++i){
            for(int x:v[i]){
                cout<<x<<" ";
            }
            cout<<"\n";
        }
        graphdfs(v,5,0);
    }
    `,
    ],
    Trie: [],
    DynamicProgramming: [],
    BitManipulation: [],
  };

  const jsonTitles = {
    Arrays: [
      "Rearrange the array in alternating positive and negative items with O(1) extra space",
      "Longest consecutive subsequence",
      "Given an array of size n and a number k, find all elements that appear more than n/k times.",
      "Dutch Flag Algorithm, Given an array which consists of only 0, 1 and 2. Sort the array without using any sorting algo",
      "Factorial of a Large Number",
      "Maximum Product Subarray",
      "Minimum number of Jumps to reach end of an array",
      "Best time to Buy and Sell stock",
      "Find common elements In 3 sorted arrays",
      "Inversion Count",
      "Next Permutation",
    ],
    Matrix: [],
    String: [],
    SearchingSorting: [],
    LinkedList: [],
    BinaryTrees: [
      "Breadth First Search of Binary Tree",
      "Size of a Binary Tree",
      "Spiral Traveral of Binary Tree with 2 Stacks",
      "Breadth First Search of Binary Tree(Line By Line)",
      "Binary Tree with Inorder and Preorder Traversals",
      "Check if Binary Tree is Balanced or not",
      "Check if Binary Tree is Balanced or not {Time: O(n)}",
      "Sum of Children should be same as root",
      "Convert Binary Tree to Doubly Linked List",
      "Diameter of a Binary Tree",
      "Height of a Binary Tree",
      "InOrder Traversal of a Binary Tree",
      "Left View of Binary Tree",
      "Maximum of a Binary Tree",
      "Maximum Width of a Binary Tree",
      "PostOrder Traversal of a Binary Tree",
      "PreOrder Traversal of a Binary Tree",
      "Print Node at distance K from root",
    ],
    BinarySearchTrees: [],
    Greedy: ["Activity Selection Problem"],
    Backtracking: [],
    StacksandQueues: [],
    Heap: [],
    Graph: [
      "Depth First Search in Graph",
      "Depth First Search in Disconnected Graph",
      "Breadth First Search in Disconnected Graph",
      "Breadth First Search in Connected Graph",
    ],
    Trie: [],
    DynamicProgramming: [],
    BitManipulation: [],
  };
  const mainTitle = "Data Structures and Algorithms Programmes";
  return (
    <div>
      <Card className={`mainTitle`}>
        <CardContent>
          <Typography className="mainTitleText">
            <h4>{mainTitle}</h4>
          </Typography>
        </CardContent>
      </Card>
      {topics.map((topic, idx) => {
        return (
          <div>
            <Card
              onClick={() => {
                let temp = [...mainIndex];
                let n = temp.includes(idx);
                if (n) {
                  temp = temp.filter((item) => item !== idx);
                } else {
                  temp.push(idx);
                }
                setMainIndex(temp);
              }}
              className={`infoBoxCodeTitle ${
                mainIndex.includes(idx) && "infoBox--selected"
              } ${mainIndex.includes(idx) && "infoBox--topics"}`}
            >
              <CardContent>
                <Typography className="infoBox__title" color="textSecondary">
                  <h5>
                    {topic}&nbsp;➼&nbsp;{jsonTitles[topic].length}
                  </h5>
                </Typography>
              </CardContent>
            </Card>
            {mainIndex.includes(idx) &&
              jsonTitles[topics[idx]].map((name, index) => {
                return (
                  <div>
                    <Card
                      onClick={() => {
                        var temp = [...index1];
                        var n = temp.includes(index);
                        if (n) {
                          temp = temp.filter((item) => item !== index);
                        } else {
                          temp.push(index);
                        }
                        setIndex(temp);
                      }}
                      className={`infoBoxCode ${
                        index1.includes(index) && "infoBox--selected"
                      } ${index1.includes(index) && "infoBox--code"}`}
                    >
                      <CardContent>
                        <Typography
                          className="infoBox__title"
                          color="textSecondary"
                        >
                          → {name}
                        </Typography>
                      </CardContent>
                    </Card>
                    {index1.includes(index) ? (
                      <div className="codeSyntax">
                        <SyntaxHighlighter language="cpp" style={docco}>
                          {jsonCodes[topics[idx]][index]}
                        </SyntaxHighlighter>
                      </div>
                    ) : null}
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
}

export default CodeUI;
