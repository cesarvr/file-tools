# File-tools

This a set of functions to help with some filesystem and configuration task. 

  -search: allow you to search files recursively. 
  -exists: given an array of paths tell you if at least one exists. 
  -exists_group: given an array of paths return what paths exists and those who dont. 


## Examples 


### Search

Simple search:

```js 
  ftool = require('file-tools');

  ftool.search(path, 'filename',  optional: { options: predicate , exclude }  )
  
  ftool.search('/usr/', 'grep'));  // { found: true, path: '/usr/bin/grep' }

```

Searching with exclude options: 

```js 
  ftool = require('file-tools');

  ftool.search(path, 'filename',  optional: { options: predicate , exclude }  )
  
                                //ignore lib, lib64 and local folders.
  ftool.search('/usr/', 'grep', {exclude:['include', 'lib', 'lib64','local'] } ) )  // { found: true, path: '/usr/bin/grep' }
```


Searching with exclude options: 

```js 
  ftool = require('file-tools');

  ftool.search(path, 'filename',  optional: { options: predicate , exclude }  )
  
                                //ignore lib, lib64 and local folders.
  ftool.search('/usr/', 'grep', {predicate: function(file, query){ return file.indexOf(query); } } ) // { found: true, path: '/usr/bin/grep' }
```







