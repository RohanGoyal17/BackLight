# BackLight
A PWA Made to edit image telemetrics

<img src="data/fav.png" width="200">

The tool uses css filters to edit the image properties. This is done in an attempt to make the application more efficient in terms of ram consumption and loading times. Default properties are editted with the dials. For custom telemetric filters we edit

```sh
<div id="tennisballcontainer" class="containo">
  <div class="svgcnt"> 
  <svg class="defs-only">
  <filter id="tennisball" color-interpolation-filters="sRGB"
          x="0" y="0" height="100%" width="100%">
    <feColorMatrix type="matrix"
      values="0 0 1 0 0                                
              0 1 0 0 1  
              1 0 0 0 0 
              0 0 0 1 0" />
</filter>
</svg>
</div>

```
