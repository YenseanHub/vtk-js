import vtkCamera from 'vtk.js/Sources/Rendering/Core/Camera';
import vtkLight from 'vtk.js/Sources/Rendering/Core/Light';
import vtkRenderWindow from 'vtk.js/Sources/Rendering/Core/RenderWindow';
import vtkProp3D from 'vtk.js/Sources/Rendering/Core/Prop3D';
import vtkViewport from 'vtk.js/Sources/Rendering/Core/Viewport';
import vtkVolume from 'vtk.js/Sources/Rendering/Core/Volume';
import vtkTexture from 'vtk.js/Sources/Rendering/Core/Texture';


interface IRendererInitialValues {
    /**
     * 
     */
    allBounds: Array<any>;

    /**
     * 
     */
    ambient: number[];

    /**
     * 
     */
    allocatedRenderTime: number;

    /**
     * 
     */
    timeFactor: number;

    /**
     * 
     */
    automaticLightCreation: boolean;

    /**
     * 
     */
    twoSidedLighting: boolean;

    /**
     * 
     */
    lastRenderTimeInSeconds: number;

    /**
     * 
     */
    lights: vtkLight[];

    /**
     * 
     */
    actors: vtkProp3D[];

    /**
     * 
     */
    volumes: vtkVolume[];

    /**
     * 
     */
    lightFollowCamera: boolean;

    /**
     * 
     */
    numberOfPropsRendered: number;

    /**
     * 
     */
    layer: number;

    /**
     * 
     */
    preserveColorBuffer: boolean;

    /**
     * 
     */
    preserveDepthBuffer: boolean;

    /**
     * 
     */
    interactive: boolean;

    /**
     * 
     */
    nearClippingPlaneTolerance: number;

    /**
     * 
     */
    clippingRangeExpansion: number;

    /**
     * 
     */
    erase: boolean;

    /**
     * 
     */
    draw: boolean;

    /**
     * 
     */
    useShadows: boolean;

    /**
     * 
     */
    useDepthPeeling: boolean;

    /**
     * 
     */
    occlusionRatio: number;

    /**
     * 
     */
    maximumNumberOfPeels: number;

    /**
     * 
     */
    texturedBackground: boolean;

    /**
     * 
     */
    pass: number;
}

export interface vtkRenderer extends vtkViewport {

    /**
     * 
     */
    isActiveCameraCreated(): boolean;
    /**
     * 
     * @param actor 
     */
    addActor(actor: vtkProp3D | null): boolean;

    /**
     * Add a light to the list of lights.
     * @param light 
     */
    addLight(light: vtkLight): void;

    /**
     * Not Implemented yet
     */
    allocateTime(): any;

    /**
     * 
     * @param volume 
     */
    addVolume(volume: vtkVolume): boolean;

    /**
     * Create and add a light to renderer.
     */
    createLight(): vtkLight;

    /**
     * 
     */
    computeVisiblePropBounds(): number[];

    /**
  * Get the active camera
  */
    getActiveCamera(): vtkCamera;

    /**
     * 
     */
    getActiveCameraAndResetIfCreated(): vtkCamera;

    /**
     * Return any actors in this renderer.
     *   
     */
    getActors(): vtkProp3D[];

    /**
     * Return any actors in this renderer.
     *   
     */
    getActorsByReference(): vtkProp3D[];

    /**
     * 
     * @default 100
     */
    getAllocatedRenderTime(): number;

    /**
     * 
     */
    getAutomaticLightCreation(): boolean;

    /**
     * 
     * @default null
     */
    getBackgroundTexture(): null | vtkTexture;

    /**
     * 
     * @default null
     */
    getBackingStore(): any;

    /**
     * 
     */
    getClippingRangeExpansion(): number;
    /**
     * 
     * @default null
     */
    getDelegate(): any;

    /**
     * 
     * @default true
     */
    getDraw(): boolean;

    /**
     * 
     * @default true
     */
    getErase(): boolean;

    /**
     * 
     * @default true
     */
    getInteractive(): boolean;

    /**
     * 
     * @default -1
     */
    getLastRenderTimeInSeconds(): number;

    /**
     * 
     * @default 0
     */
    getNumberOfPropsRendered(): number;

    /**
     * 
     * @default 
     */
    getLastRenderingUsedDepthPeeling(): any

    /**
     * 
     * @default 0
     */
    getLayer(): number;

    /**
     * 
     * @default true
     */
    getLightFollowCamera(): boolean;

    /**
     * 
     */
    getLights(): vtkLight[];

    /**
     * 
     */
    getLightsByReference(): vtkLight[];

    /**
     * 
     * @default 4
     */
    getMaximumNumberOfPeels(): number;

	/**
	 * Return the `Modified Time` which is a monotonic increasing integer
	 * global for all vtkObjects.
	 *
	 * This allow to solve a question such as:
	 *  - Is that object created/modified after another one?
	 *  - Do I need to re-execute this filter, or not? ...
	 *
	 * @returns the global modified time
	 */
    getMTime(): number;

    /**
     * 
     * @default 0
     */
    getNearClippingPlaneTolerance(): number;

    /**
     * 
     * @default 0
     */
    getOcclusionRatio(): number;

    /**
     * 
     * @default null
     */
    getRenderWindow(): null | vtkRenderWindow;

    /**
     * 
     * @default 0
     */
    getPass(): number;

    /**
     * 
     * @default false
     */
    getPreserveColorBuffer(): boolean;

    /**
     * 
     * @default false
     */
    getPreserveDepthBuffer(): boolean;

    /**
     * 
     * @default null
     */
    getSelector(): any;

    /**
     * 
     * @default 1
     */
    getTimeFactor(): number;

    /**
     * 
     * @default true
     */
    getTransparent(): boolean;

    /**
     * 
     * @default false
     */
    getTexturedbackground(): boolean;

    /**
     * 
     * @default true
     */
    getTwosidedlighting(): boolean;

    /**
     * 
     * @default false
     */
    getUsedepthpeeling(): boolean;

    /**
     * 
     * @default false
     */
    getUseshadows(): boolean;

    /**
    * 
    */
    getVTKWindow(): vtkRenderWindow;

    /**
     * Return the collection of volumes.
     *  
     */
    getVolumes(): vtkVolume[];


    /**
     * Return the collection of volumes.
     *  
     */
    getVolumesByReference(): vtkVolume[];

    /**
     * Create a new Camera sutible for use with this type of Renderer.
     */
    makeCamera(): vtkCamera;

    /**
     * Create a new Light sutible for use with this type of Renderer.
     */
    makeLight(): vtkLight;

    /**
     * requires the aspect ratio of the viewport as X/Y
     * @param {number} x 
     * @param {number} y 
     * @param {number} z 
     * @param {number} aspect 
     */
    normalizedDisplayToWorld(x: number, y: number, z: number, aspect: number): number[];

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {number} z 
     * @param {number} aspect 
     */
    projectionToView(x: number, y: number, z: number, aspect: number): number[];

    /**
     * Specify the camera to use for this renderer.
     * @param camera 
     */
    setActiveCamera(camera: vtkCamera | null): boolean;

    /**
     * 
     * @param automaticLightCreation 
     */
    setAutomaticLightCreation(automaticLightCreation: boolean): boolean;

    /**
     * 
     * @param backgroundTexture 
     */
    setBackgroundTexture(backgroundTexture: vtkTexture): boolean;

    /**
     * 
     * @param backingStore 
     */
    setBackingStore(backingStore: any): boolean;

    /**
     * 
     * @param clippingRangeExpansion 
     */
    setClippingRangeExpansion(clippingRangeExpansion: number): boolean;

    /**
     * 
     * @param delegate 
     */
    setDelegate(delegate: any): boolean;

    /**
     * 
     * @param {boolean} draw 
     */
    setDraw(draw: boolean): boolean;

    /**
     * 
     * @param {boolean} erase 
     */
    setErase(erase: boolean): boolean;

    /**
     * 
     * @param {boolean} interactive 
     */
    setInteractive(interactive: boolean): boolean;

    /**
     * 
     * @param {number} layer 
     */
    setLayer(layer: number): void;

    /**
     * Set the collection of lights.
     * @param {vtkLight[]} lights 
     */
    setLightCollection(lights: vtkLight[]): void;

    /**
     * 
     * @param lightFollowCamera 
     */
    setLightFollowCamera(lightFollowCamera: boolean): boolean;

    /**
     * 
     * @param {number} maximumNumberOfPeels 
     */
    setMaximumNumberOfPeels(maximumNumberOfPeels: number): boolean;

    /**
     * 
     * @param {number} nearClippingPlaneTolerance 
     */
    setNearClippingPlaneTolerance(nearClippingPlaneTolerance: number): boolean;

    /**
     * 
     * @param {number} occlusionRatio 
     */
    setOcclusionRatio(occlusionRatio: number): boolean;

    /**
     * 
     * @param {number} pass 
     */
    setPass(pass: number): boolean;

    /**
     * 
     * @param {boolean} preserveColorBuffer 
     */
    setPreserveColorbuffer(preserveColorBuffer: boolean): boolean;

    /**
     * 
     * @param {boolean} preserveDepthBuffer 
     */
    setPreserveDepthbuffer(preserveDepthBuffer: boolean): boolean;

    /**
     * 
     * @param {boolean} texturedBackground 
     */
    setTexturedBackground(texturedBackground: boolean): boolean;

    /**
     * 
     * @param {boolean} twoSidedLighting 
     */
    setTwoSidedLighting(twoSidedLighting: boolean): boolean;

    /**
     * 
     * @param {boolean} useDepthPeeling 
     */
    setUseDepthPeeling(useDepthPeeling: boolean): boolean;

    /**
     * 
     * @param {boolean} useShadows 
     */
    setUseShadows(useShadows: boolean): boolean;

    /**
     * 
     * @param {vtkRenderWindow} renderWindow 
     */
    setRenderWindow(renderWindow: vtkRenderWindow): void;

    /**
     * 
     * @param {vtkProp3D | null} actor 
     */
    removeActor(actor: vtkProp3D | null): void;

    /**
     * 
     */
    removeAllActors(): void;

    /**
     * 
     * @param {vtkVolume} volume 
     */
    removeVolume(volume: vtkVolume): void;

    /**
     * 
     */
    removeAllVolumes(): void;

    /**
     * Remove a light from the list of lights.
     * @param {vtkLight} light 
     */
    removeLight(light: vtkLight): void;

    /**
     * Remove all lights from the list of lights.
     */
    removeAllLights(): void;

    /**
     * requires the aspect ratio of the viewport as X/Y
     * @param {number} x 
     * @param {number} y 
     * @param {number} z 
     * @param {number} aspect 
     */
    worldToNormalizedDisplay(x: number, y: number, z: number, aspect: number): number[];

    /**
     * requires the aspect ratio of the viewport as X/Y
     * @param {number} x 
     * @param {number} y 
     * @param {number} z 
     */
    viewToWorld(x: number, y: number, z: number): number[];

    /**
     * Convert world point coordinates to view coordinates.
     * @param {number} x 
     * @param {number} y 
     * @param {number} z 
     */
    worldToView(x: number, y: number, z: number): number[];

    /**
     * Convert world point coordinates to view coordinates.
     * requires the aspect ratio of the viewport as X/Y
     * @param {number} x 
     * @param {number} y 
     * @param {number} z 
     * @param {number} aspect 
     */
    viewToProjection(x: number, y: number, z: number, aspect: number): number[];

    /**
     * 
     * @param {number[]} [bounds] 
     */
    resetCamera(bounds?: number[]): boolean;

    /**
     * 
     * @param {number[]} [bounds] 
     */
    resetCameraClippingRange(bounds?: number[]): boolean;

    /**
     * 
     */
    visibleActorCount(): void;

    /**
     * Not Implemented yet
     */
    updateGeometry(): any;

    /**
     * 
     */
    updateCamera(): boolean;

    /**
     * Ask the lights in the scene that are not in world space
     * (for instance, Headlights or CameraLights that are attached to the
     * camera) to update their geometry to match the active camera.
     */
    updateLightsGeometryToFollowCamera(): void;

    /**
     * 
     */
    updateLightGeometry(): boolean;

    /**
     * Not Implemented yet
     */
    visibleVolumeCount(): any;
}

/**
 * Method use to decorate a given object (publicAPI+model) with vtkRenderer characteristics.
 *
 * @param publicAPI object on which methods will be bounds (public)
 * @param model object on which data structure will be bounds (protected)
 * @param {IRendererInitialValues} [initialValues] (default: {})
 */
export function extend(publicAPI: object, model: object, initialValues?: IRendererInitialValues): void;

/**
 * Method use to create a new instance of vtkRenderer.
 * @param initialValues for pre-setting some of its content
 */
export function newInstance(initialValues?: IRendererInitialValues): vtkRenderer;

/** 
 * vtkRenderer is a Viewport designed to hold 3D properties. It contains
 * an instance of vtkCamera, a collection of vtkLights, and vtkActors. It exists
 * within a RenderWindow. A RenderWindow may have multiple Renderers
 * representing different viewports of the Window and Renderers can be layered
 * on top of each other as well.
 */
export declare const vtkRenderer: {
    newInstance: typeof newInstance,
    extend: typeof extend,
};
export default vtkRenderer;