import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Svg, { Defs, RadialGradient, Stop, Circle, Rect } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const App = () => {
    return (
        <View style={styles.container}>
            <Svg height={height} width={width} style={StyleSheet.absoluteFill}>
                
                {/* White Background */}
                <Rect x="0" y="0" width={width} height={height} fill="#FFFFFF" />
                
                {/* ===== PINK GRADIENT LAYERS (MAXIMUM SIZE) ===== */}
                <Defs>
                    {/* Pink Gradient - Layer 1 (Outer Glow - Biggest) */}
                    <RadialGradient
                        id="pinkGradient1"
                        cx={width * 0.85}
                        cy={height * 0.15}
                        r={width * 0.7}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop offset="0%" stopColor="rgba(255, 179, 193, 1)" stopOpacity="0.3" />
                        <Stop offset="40%" stopColor="rgba(255, 179, 193, 1)" stopOpacity="0.15" />
                        <Stop offset="70%" stopColor="rgba(255, 179, 193, 1)" stopOpacity="0.05" />
                        <Stop offset="100%" stopColor="rgba(255, 179, 193, 1)" stopOpacity="0" />
                    </RadialGradient>
                    
                    {/* Pink Gradient - Layer 2 (Mid Glow) */}
                    <RadialGradient
                        id="pinkGradient2"
                        cx={width * 0.85}
                        cy={height * 0.15}
                        r={width * 0.5}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop offset="0%" stopColor="rgba(255, 179, 193, 1)" stopOpacity="0.5" />
                        <Stop offset="50%" stopColor="rgba(255, 179, 193, 1)" stopOpacity="0.25" />
                        <Stop offset="85%" stopColor="rgba(255, 179, 193, 1)" stopOpacity="0.05" />
                        <Stop offset="100%" stopColor="rgba(255, 179, 193, 1)" stopOpacity="0" />
                    </RadialGradient>
                    
                    {/* Pink Gradient - Layer 3 (Core) */}
                    <RadialGradient
                        id="pinkGradient3"
                        cx={width * 0.85}
                        cy={height * 0.15}
                        r={width * 0.3}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop offset="0%" stopColor="rgba(255, 179, 193, 1)" stopOpacity="0.9" />
                        <Stop offset="60%" stopColor="rgba(255, 179, 193, 1)" stopOpacity="0.4" />
                        <Stop offset="100%" stopColor="rgba(255, 179, 193, 1)" stopOpacity="0" />
                    </RadialGradient>
                    
                    {/* ===== BLUE GRADIENT LAYERS (MAXIMUM SIZE) ===== */}
                    {/* Blue Gradient - Layer 1 (Outer Glow - Biggest) */}
                    <RadialGradient
                        id="blueGradient1"
                        cx={width * 0.1}
                        cy={height * 0.4}
                        r={width * 0.8}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop offset="0%" stopColor="rgba(179, 224, 255, 1)" stopOpacity="0.25" />
                        <Stop offset="50%" stopColor="rgba(179, 224, 255, 1)" stopOpacity="0.1" />
                        <Stop offset="80%" stopColor="rgba(179, 224, 255, 1)" stopOpacity="0.02" />
                        <Stop offset="100%" stopColor="rgba(179, 224, 255, 1)" stopOpacity="0" />
                    </RadialGradient>
                    
                    {/* Blue Gradient - Layer 2 (Mid Glow) */}
                    <RadialGradient
                        id="blueGradient2"
                        cx={width * 0.1}
                        cy={height * 0.4}
                        r={width * 0.6}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop offset="0%" stopColor="rgba(179, 224, 255, 1)" stopOpacity="0.5" />
                        <Stop offset="60%" stopColor="rgba(179, 224, 255, 1)" stopOpacity="0.2" />
                        <Stop offset="90%" stopColor="rgba(179, 224, 255, 1)" stopOpacity="0.03" />
                        <Stop offset="100%" stopColor="rgba(179, 224, 255, 1)" stopOpacity="0" />
                    </RadialGradient>
                    
                    {/* Blue Gradient - Layer 3 (Core) */}
                    <RadialGradient
                        id="blueGradient3"
                        cx={width * 0.1}
                        cy={height * 0.4}
                        r={width * 0.4}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop offset="0%" stopColor="rgba(179, 224, 255, 1)" stopOpacity="0.8" />
                        <Stop offset="70%" stopColor="rgba(179, 224, 255, 1)" stopOpacity="0.3" />
                        <Stop offset="100%" stopColor="rgba(179, 224, 255, 1)" stopOpacity="0" />
                    </RadialGradient>
                    
                    {/* ===== PURPLE GRADIENT LAYERS (MAXIMUM SIZE) ===== */}
                    {/* Purple Gradient - Layer 1 (Outer Glow - Biggest) */}
                    <RadialGradient
                        id="purpleGradient1"
                        cx={width * 0.5}
                        cy={height * 0.85}
                        r={width * 1.2}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop offset="0%" stopColor="rgba(212, 166, 255, 1)" stopOpacity="0.15" />
                        <Stop offset="40%" stopColor="rgba(212, 166, 255, 1)" stopOpacity="0.06" />
                        <Stop offset="70%" stopColor="rgba(212, 166, 255, 1)" stopOpacity="0.01" />
                        <Stop offset="100%" stopColor="rgba(212, 166, 255, 1)" stopOpacity="0" />
                    </RadialGradient>
                    
                    {/* Purple Gradient - Layer 2 (Large Glow) */}
                    <RadialGradient
                        id="purpleGradient2"
                        cx={width * 0.5}
                        cy={height * 0.85}
                        r={width * 0.9}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop offset="0%" stopColor="rgba(212, 166, 255, 1)" stopOpacity="0.3" />
                        <Stop offset="50%" stopColor="rgba(212, 166, 255, 1)" stopOpacity="0.12" />
                        <Stop offset="85%" stopColor="rgba(212, 166, 255, 1)" stopOpacity="0.02" />
                        <Stop offset="100%" stopColor="rgba(212, 166, 255, 1)" stopOpacity="0" />
                    </RadialGradient>
                    
                    {/* Purple Gradient - Layer 3 (Mid Glow) */}
                    <RadialGradient
                        id="purpleGradient3"
                        cx={width * 0.5}
                        cy={height * 0.85}
                        r={width * 0.6}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop offset="0%" stopColor="rgba(212, 166, 255, 1)" stopOpacity="0.5" />
                        <Stop offset="60%" stopColor="rgba(212, 166, 255, 1)" stopOpacity="0.2" />
                        <Stop offset="90%" stopColor="rgba(212, 166, 255, 1)" stopOpacity="0.04" />
                        <Stop offset="100%" stopColor="rgba(212, 166, 255, 1)" stopOpacity="0" />
                    </RadialGradient>
                    
                    {/* Purple Gradient - Layer 4 (Core) */}
                    <RadialGradient
                        id="purpleGradient4"
                        cx={width * 0.5}
                        cy={height * 0.85}
                        r={width * 0.4}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop offset="0%" stopColor="rgba(212, 166, 255, 1)" stopOpacity="0.8" />
                        <Stop offset="70%" stopColor="rgba(212, 166, 255, 1)" stopOpacity="0.3" />
                        <Stop offset="100%" stopColor="rgba(212, 166, 255, 1)" stopOpacity="0" />
                    </RadialGradient>
                </Defs>
                
                {/* ===== RENDER ALL GRADIENT LAYERS (MASSIVE CIRCLES) ===== */}
                
                {/* Pink Circle Layers */}
                <Circle cx={width * 0.85} cy={height * 0.15} r={width * 0.7} fill="url(#pinkGradient1)" />
                <Circle cx={width * 0.85} cy={height * 0.15} r={width * 0.5} fill="url(#pinkGradient2)" />
                <Circle cx={width * 0.85} cy={height * 0.15} r={width * 0.3} fill="url(#pinkGradient3)" />
                
                {/* Blue Circle Layers */}
                <Circle cx={width * 0.1} cy={height * 0.4} r={width * 0.8} fill="url(#blueGradient1)" />
                <Circle cx={width * 0.1} cy={height * 0.4} r={width * 0.6} fill="url(#blueGradient2)" />
                <Circle cx={width * 0.1} cy={height * 0.4} r={width * 0.4} fill="url(#blueGradient3)" />
                
                {/* Purple Circle Layers */}
                <Circle cx={width * 0.5} cy={height * 0.85} r={width * 1.2} fill="url(#purpleGradient1)" />
                <Circle cx={width * 0.5} cy={height * 0.85} r={width * 0.9} fill="url(#purpleGradient2)" />
                <Circle cx={width * 0.5} cy={height * 0.85} r={width * 0.6} fill="url(#purpleGradient3)" />
                <Circle cx={width * 0.5} cy={height * 0.85} r={width * 0.4} fill="url(#purpleGradient4)" />
                
                {/* Additional Solid Core Circles for Intensity */}
                <Circle cx={width * 0.85} cy={height * 0.15} r={width * 0.1} fill="rgba(255, 179, 193, 0.4)" />
                <Circle cx={width * 0.1} cy={height * 0.4} r={width * 0.15} fill="rgba(179, 224, 255, 0.3)" />
                <Circle cx={width * 0.5} cy={height * 0.85} r={width * 0.2} fill="rgba(212, 166, 255, 0.3)" />
                
                {/* White Overlay for Perfect Blending */}
                <Rect 
                    x="0" 
                    y="0" 
                    width={width} 
                    height={height} 
                    fill="rgba(255, 255, 255, 0.1)" 
                />
                
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
});

export default App;