import React, { Component } from 'react';
import Post from './Post';

import profileCaio from '../assets/0.jpeg';
import profileMarco from '../assets/1.jpeg';
import profileGui from '../assets/2.jpeg';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Caio Xavier",
          avatar: profileCaio
        },
        date: "14 Nov 2019",
        content: "Pessoal, fizeram o TCC em qual linguagem?",
        comments: [
          {
            id: 1,
            author: {
              name: "Marco Alves",
              avatar: profileMarco
            },
            content: "Python"
          },
          {
            id: 2,
            author: {
              name: "Guilherme Luís",
              avatar: profileGui
            },
            content: "PHP"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Caio Xavier",
          avatar: profileCaio
        },
        date: "14 Nov 2019",
        content: "Pessoal, fizeram o TCC em qual linguagem?",
        comments: [
          {
            id: 1,
            author: {
              name: "Marco Alves",
              avatar: profileMarco
            },
            content: "Python"
          },
          {
            id: 2,
            author: {
              name: "Guilherme Luís",
              avatar: profileGui
            },
            content: "PHP"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Caio Xavier",
          avatar: profileCaio
        },
        date: "14 Nov 2019",
        content: "Pessoal, fizeram o TCC em qual linguagem?",
        comments: [
          {
            id: 1,
            author: {
              name: "Marco Alves",
              avatar: profileMarco
            },
            content: "Python"
          },
          {
            id: 2,
            author: {
              name: "Guilherme Luís",
              avatar: profileGui
            },
            content: "PHP"
          }
        ]
      }
    ]
  };

  render(){
    const { posts } = this.state;

    return(
      <div className="postlist">
         {posts.map(post => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;