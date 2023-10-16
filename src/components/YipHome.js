import React, { useState, useContext } from "react";
import { Routes, Route, Link } from 'react-router-dom'
import CSSContext from "../context/CSS-context";
import { YipHomeCSSContainer, NotesNavigation, CreateNote, Kennel, Note, MainBody, MainBodyBarrier, InfoBoard } from "../styled-components/Yip-home-styled-components/YipHomeStyled";

export default function YipHome() {

    const stylesContext = useContext(CSSContext)

    return (
        <YipHomeCSSContainer styles={stylesContext} >
            <MainBody>
                <MainBodyBarrier>
                    <NotesNavigation>
                        <CreateNote>
                            <div className={`content-container`}>
                                <div className={`child-content`}>
                                    <h3>Name:</h3>
                                    <h3>Category:</h3>
                                </div>
                                <div className={`child-content`}>git
                                    <h3>Create:</h3>
                                </div>
                            </div>
                        </CreateNote>
                        <Kennel>
                            <div className={`content-container`}>
                                <div className={`child-content`}>
                                    <h3>Kennel Name</h3>
                                    <h3>Kennel Category</h3>
                                </div>
                                <div className={`child-content notes`}>
                                    <Note><h4>Dogs</h4></Note>
                                    <Note><h4>Dogs</h4></Note>
                                    <Note><h4>Dogs</h4></Note>
                                </div>
                            </div>
                        </Kennel>
                        <Kennel>
                            <div className={`content-container`}>
                                <div className={`child-content`}>
                                    <h3>Kennel Name</h3>
                                    <h3>Kennel Category</h3>
                                </div>
                                <div className={`child-content notes`}>
                                    <Note><h4>Dogs</h4></Note>
                                    <Note><h4>Dogs</h4></Note>
                                    <Note><h4>Dogs</h4></Note>
                                </div>
                            </div>
                        </Kennel>
                    </NotesNavigation>
                    <InfoBoard>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut elit justo. Fusce nec euismod ligula. In eu bibendum velit. Integer sed consectetur risus, nec consectetur libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque tincidunt, quam ac rutrum luctus, odio purus fermentum massa, eu ultricies velit metus vel massa. Vestibulum luctus justo nec quam ultricies, at suscipit justo bibendum. Aliquam et justo eu enim efficitur scelerisque. Suspendisse fringilla lacus nec metus finibus, sit amet hendrerit ligula laoreet. Phasellus rhoncus purus id sapien eleifend, eu fermentum sem scelerisque. Nunc auctor libero vel libero vestibulum, vel fringilla urna convallis. Ut vel libero lectus.

                            Nam viverra nunc non nisl consectetur, at fermentum felis convallis. Etiam auctor dolor vel risus ullamcorper efficitur. Suspendisse potenti. Phasellus vel magna a lacus feugiat malesuada. Ut commodo lacus sit amet fringilla auctor. Duis facilisis, purus a accumsan ullamcorper, urna odio consectetur justo, vel aliquam nunc leo vel nunc. Ut et odio eu elit semper tempus ut eu arcu. Integer in tellus justo. Integer id tortor vel orci vehicula interdum. Suspendisse potenti. Aliquam sed accumsan tellus. Sed in tellus in tellus rhoncus luctus. Fusce convallis quam vitae elit volutpat, sit amet eleifend est laoreet.
                        </p>
                    </InfoBoard>
                </MainBodyBarrier>
            </MainBody>
        </YipHomeCSSContainer>
    )
}