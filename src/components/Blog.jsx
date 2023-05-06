import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-2xl'>1. Tell us the differences between uncontrolled and controlled components.</h1>
            <p> PropTypes.any: The prop can be of any data type
                PropTypes.bool: The prop should be a Boolean
                PropTypes.number: The prop should be a number
                PropTypes.string: The prop should be a string
                PropTypes.func: The prop should be a function
                PropTypes.array: The prop should be an array
                PropTypes.object: The prop should be an object
                PropTypes.symbol: The prop should be a symbol</p>
            <h1 className='text-2xl'>2. Tell us the difference between nodejs and express js.</h1>
            <div className="overflow-x-auto bg-orange-400">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Feature</th>
                            <th>Express.js</th>
                            <th>Node.js</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Usage</td>
                            <td>It is used to build web-apps using approaches and principles of Node.js.</td>
                            <td>It is used to build server-side, input-output, event-driven apps.</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Level of features</td>
                            <td>More features than Node.js.</td>
                            <td>Fewer features.</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Building Block</td>
                            <td>It is built on Node.js.</td>
                            <td>It is built on Google’s V8 engine.</td>
                        </tr>
                    </tbody>
                </table>
                <h1 className='text-2xl'>What is a custom hook, and why will you create a custom hook?</h1>
                <p>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem. But what if there is no such library with hooks that can be used? This problem is solved by using custom React JS hooks.</p>
            </div>

        </div>
    );
};

export default Blog;