import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class List extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			tasks: Array(0),
			keyTask: 0,
		}
	}

	//может быть, переписать Task как функцию?

	renderTask(){
		let newTaskList = this.state.tasks;
		newTaskList.push(<Task keyTask={this.state.keyTask} text={this.state.textTask} />);
		let newKeyTask = this.state.keyTask;
		newKeyTask++;
		this.setState({
			tasks: newTaskList,
			keyTask: newKeyTask,
		}); 
	}
	render(){
		let taskList = this.state.tasks;
		return(
			<div className="list">
				<h1>My todo list!</h1>
				<ol>
					{taskList}
				</ol>
				<button 
				className="add_task" 
				onClick={() => this.renderTask()}
				>
					Add task
				</button>
			</div>
		);
	}
}

class Task extends React.Component {
	render() {
		console.log(this.props.keyTask);
		return(
			<li key={this.props.keyTask}><TextTask /></li>
		);
	}
}

class TextTask extends React.Component {
	render() {
		return (
			<textarea placeholder="write your text here..."></textarea>
		);
	}
}

// ========================================

ReactDOM.render(
	<List />,
	document.getElementById('root')
);
  