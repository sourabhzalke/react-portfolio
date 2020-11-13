import React from "react";
import "./Codes.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useState } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css";

function CodeUI() {
  const [index1, setIndex] = useState([]);
  const codeTitle = [
    "Breadth First Search of Binary Tree",
    "Size of a Binary Tree",
    "Spiral Traveral of Binary Tree with 2 Stacks",
    "Breadth First Search of Binary Tree(Line By Line)",
    "Binary Tree with Inorder and Preorder Traversals",
    "Check if Binary Tree is Balanced or not",
    "Check if Binary Tree is Balanced or not {Time: O(n)}",
    "Sum of Children should be same as root",
    "Convert Binary Tree to Doubly Linked List",
    "Depth First Search in Graph",
    "Diameter of a Binary Tree",
    "Depth First Search in Disconnected Graph",
    "Breadth First Search in Disconnected Graph",
    "Breadth First Search in Connected Graph",
    "Height of a Binary Tree",
    "InOrder Traversal of a Binary Tree",
    "Left View of Binary Tree",
    "Maximum of a Binary Tree",
    "Maximum Width of a Binary Tree",
    "PostOrder Traversal of a Binary Tree",
    "PreOrder Traversal of a Binary Tree",
    "Print Node at distance K from root",
  ];
  const mainTitle = "Data Structures and Algorithms Programmes";

  const codeString = [
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
  ];
  return (
    <div>
      <Card className={`mainTitle`}>
        <CardContent>
          <Typography className="mainTitleText">{mainTitle}</Typography>
        </CardContent>
      </Card>
      {codeTitle.map((name, index) => {
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
                console.log(index1);
              }}
              className={`infoBoxCode ${
                index1.includes(index) && "infoBox--selected"
              } ${index1.includes(index) && "infoBox--code"}`}
            >
              <CardContent>
                <Typography className="infoBox__title" color="textSecondary">
                  {name}
                </Typography>
              </CardContent>
            </Card>
            {index1.includes(index) ? (
              <div className="codeSyntax">
                <SyntaxHighlighter language="cpp" style={docco}>
                  {codeString[index]}
                </SyntaxHighlighter>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default CodeUI;
