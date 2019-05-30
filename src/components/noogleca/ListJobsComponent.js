import React, {Component} from 'react'

class ListJobsComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            jobs : 
            [
             {id: 1, description : 'Software Developer', done:false, targetDate: new Date()},
             {id: 2, description : 'Developer of an Expert at React', done:false, targetDate: new Date()},
             {id: 3, description : 'Test Developer', done:false, targetDate: new Date()}
            ]
        }
    }

    render() {
        return (
            <div>
                 <h1>List jobs</h1>
                 <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Target Date</th>
                                <th>IsCompleted?</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.jobs.map (
                                job =>
                                    <tr key={job.id}>
                                        <td>{job.description}</td>
                                        <td>{job.done.toString()}</td>
                                        <td>{job.targetDate.toString()}</td>
                                    </tr>
                            )
                            }
                        </tbody>
                    </table>
                 </div>
            </div>
        )
    }
}

export default ListJobsComponent