# Advanced 3D Scan Optimization with QuadRemesher and Blender

## Why remesh my 3D scans?

3D scanned meshes are *never* game-ready, optimized for web viewing, or optimized for animation. Meshes exported from 3D scanning suites like EXScan or RevoScan often have non-continuous topology, holes, artifacts, or triangular polygons, all of which prevent 3D scanned meshes from being used as regular 3D models.

This means the 3D scans you create have to be optimized further in programs such as Blender or 3DSMax. For the purposes of the Digitization Internship and the Digital Scholarship Research position, this guide will cover the workflow in Blender.

Remeshing your models is an advanced procedure that involves trial and error. If you encounter any difficulties, please refer to online resources or ask the Digital Scholarship team for guidance.

## Requirements for Remeshing

To remesh models, you will need the following:
- A high performance computer. (M2 or above for MacOS; Intel i7 or Ryzen 5 or above for Windows/Linux; a minimum of 16 GB of memory)
- A Blender install with the QuadRemesher addon installed. (Blender 4.0 or above)
- A mouse or drawing tablet.

## Activating QuadRemesher

Enter the following information into QuadRemesher after enabling the addon in Blender. The addon will open a menu that prompts you to register the addon.

Activation key:
QRMI-7LFS-7FMB-GGPL

Use with:
digitalscholarship@swarthmore.edu 

:::warning
**Do not use this key for personal use.** The addon stores a UUID for each install, and it will not work on your personal computer.
:::

## Optimizing the Base Mesh

1. Click into the *Modifiers* tab for the duplicate of the high-poly mesh. 
2. Add the *Remesh Modifier* and select *Voxel* or *Smooth*. 
3. Adjust the other options to achieve a remeshing of the high-poly mesh that has **continuous geometry** and a **lower vertex count**. 
4. *Apply* the *Remesh Modifier* to complete the first step of the remeshing.

5. Open the *QuadRemesher* addon menu, located in the right-hand menu in the viewport (opened using *N*). The only parameter that you need to adjust is the Quad Count, which is the field under the button labeled *<< REMESH IT >>.* 
Ideally, the *Quad Count* should be *half* of the *Face Count* of a high-poly mesh.
Click the *<< REMESH IT >>* button to remesh the 3D scan. If the geometry of the model is **even** and **divided into 4-sided faces (quads)**, then the mesh optimization is complete.

## Transferring Surface and Color Details through Normal Maps

The optimal approach for transferring surface details for webview or game usage is to use *normal maps*. These simulate geometry by applying a scalar to each vertex (which itself is a vector w/ 3 scalar components). A key aspect of normal maps is their ability to add detail without adding geometry, meaning that they provide detail without any performance loss. 

### Prep work in Blender:
1. In Blender, select your low-poly 3D model and enter Edit Mode. 
2. Press A to select all verts, and mouse over the UV menu, and press UV Smart Project. Click OK. Your low-poly 3D model now has UVs. 
3. Export both the high-poly and low-poly models in .obj format and take note of where the high-poly model’s texture files were saved.

### Transferring textures in Substance Designer

1. Open Adobe Substance Designer and create a *New Substance* graph. A popup will appear, but do not change any of the settings, and click on *Ok*. 
2. You will be presented with a multi-tab UI. Under the tab labeled *Explorer*, right click on *Unsaved Package*. 
3. Mouse over *Link*, and click on *3D Scene*. This will open the file explorer. Select and import your *low-poly* 3D model. This will create a new folder named *Resources*. 
4. Right click on the 3D model that you imported, under the Resources folder, and select the *Bake Model Information* button. This will open a new window. 
5. *Under Setup High Definition Meshes*, import your *high-poly* 3D model. 
6. Under *Bakers* render list, click *Add baker* and add the *Normal Map from Mesh* and the *Transferred Texture from Mesh* bakers. 
7. For both bakers, the *Map Type* should be *Tangent space*
8. The *Transferred Texture from Mesh* baker will need the high-poly model’s texture file, which can be selected by clicking on the 3 dots/meatball button.
9. After both bakers are configured, click on the *Start Render* button on the center of the bottom tab. 
10. The texture maps will be exported to the folder you specified under *Output*, which is the Adobe Substance Designer folder in the *Documents* folder by default. 

### Applying the textures in Blender:

1. In Blender, open the shader node view for the low-poly object.
2. Create two *Image Texture* nodes. 
3. Create a *Normal Map* node as well. 
4. Connect these nodes to their respective inputs on the *Principled BDSF* node by clicking on the colored dots on the node and dragging them to similarly colored dots on the *Principled BDSF* node. 
5. On the *Image Texture* nodes, click the *Open Image* button and open the color map for the texture image labeled as *Diffuse* by Adobe Substance Designer for the node connected to the *Color* output
6. Open the normal map for the texture image labeled as *Normal* by Substance Designer for the node connected to the *Normal Map* node.
7. Switch to *Rendered View* in Blender to check that the maps have been transferred properly. 
8. Export to .glb and embed in your project.

## Alternative Approaches

If the above solutions are lacking, or don’t work for your use case:
- Try ZBrush as an alternative software package for remeshing.
- Try a photogrammetric approach using Meshroom or MetaShape.
- Use bump maps or displacement maps as an alternative way to add detail to your low-poly model. 
- CrazyBump, AwesomeBump, xNormal, and the Intel TextureWorks Plugin for Photoshop are easier ways to generate normal maps from color textures, instead of mesh geometry.
- 3D software suites for LookDev work, like Marmoset’s Toolbag or Adobe’s Substance Painter, may produce better texture baking results.
- Refer to Blender documentation or 3D tutorials on the web.
- Contact the Digital Scholarship team for guidance.


> Questions? 
>Please contact: (dryulim1@swarthmore.edu) or (digitalscholarship@swarthmore.edu) 
