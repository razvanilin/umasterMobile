import React, {Component} from 'react'
import Drawer from 'react-native-drawer';
// import SideMenu from './SideMenu';
import {Actions, DefaultRenderer} from 'react-native-router-flux';

import DrawerContent from './DrawerContent'

export default class extends Component {
    render(){
        const state = this.props.navigationState;
        const children = state.children;
        return (
            <Drawer
                ref="navigation"
                open={state.open}
                onOpen={()=>Actions.refresh({key:state.key, open: true})}
                onClose={()=>Actions.refresh({key:state.key, open: false})}
                type="displace"
                content={<DrawerContent />}
                styles={{main: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}}}
                tapToClose={true}
                openDrawerOffset={0.4}
                panCloseMask={0.4}
                panOpenMask={0.2}
                negotiatePan={true}
                tweenHandler={(ratio) => ({
                 main: {opacity:Math.max(0.54,1-ratio) },
                 mainOverlay: {opacity: ratio / 2,backgroundColor: "#A76F94"}
            })}>
                <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
            </Drawer>
        );
    }
}
