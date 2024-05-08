import React from 'react'
import PropTypes from "prop-types"

const Slide = (props) =>
    {
        return (
            
                    <div className="con" key={props.head} style={{
                        display: 'flex',
                        flexWrap: 'wrap'
                    }}>
                        {
                            props.index % 2 !== 0 ? (
                                <div className="con" key={props.head} style={{
                                    display: 'flex',
                                    flexWrap: 'wrap'
                                }}>
                                    <div style={{ padding: '50px', width: '710px', height: '300px' }}>
                                        <h1>{props.head}</h1>
                                        <h3>{props.subj}</h3>
                                    </div>
                                    <div style={{ width: '700px', height: '320px' }}>
                                        <img style={{ height: '400px', width: '800px' }} src={props.image} alt="image" />
                                    </div>
                                </div>

                            ) : (
                                <div className="con" key={props.head} style={{
                                    display: 'flex',
                                    flexWrap: 'wrap'
                                }}>
                                    <div style={{ width: '710px', height: '300px' }}>
                                        <img style={{ height: '300px', width: '700px' }} src={props.image} alt="image" />
                                    </div>
                                    <div style={{ width: '700px', height: '320px' }}>
                                        <h1>{props.head}</h1>
                                        <h3>{props.subj}</h3>
                                    </div>
                                </div>

                            )
                        }
                    </div>

                )
            };

Slide.PropTypes = {
  image : PropTypes.string,
  head : PropTypes.string,
  subj : PropTypes.string,

}
    
export default Slide