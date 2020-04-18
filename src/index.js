import React from 'react';
import ReactDom from 'react-dom';
import Comment from './CommentDetail'
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">


            <ApprovalCard> <Comment time="7:00" userName="Dmitry" content="Some blog post 1"/> </ApprovalCard>

            <ApprovalCard> <Comment time="7:00" userName="Alex" content="Some blog post 2"/> </ApprovalCard>

            <ApprovalCard> <Comment time="8:00" userName="Max" content="Some blog post 3"/> </ApprovalCard>
        </div>
    );
}

ReactDom.render(<App/>, document.querySelector("#root"));