# File-tools

This a set of functions to help with some necessity task. 

  -search: allow you to search files recursively. 
  -exists: given an array of paths tell you if at least one exists. 
  -exists_group: given an array of paths return what paths exists and those who dont. 


## Examples 

Simple search:

```js 
  ftool = require('file-tools');

  ftool.search(path, 'filename',  optional: { options: predicate , exclude }  )
  
  ftool.search('/usr/', 'grep'));  // { found: true, path: '/usr/bin/grep' }

```

Searching with exclude options: 

```js 
  ftool = require('file-tools');
  
  ftool.search('/usr/', 'grep', {exclude:['include', 'lib', 'lib64','local'] } ) )  
  // { found: true, path: '/usr/bin/grep' }


```

Searching with custom predicate: 

```js 
  ftool.search('/usr/', 'grep', {predicate: function(file, query){ return file.indexOf(query); } } ) 
  // { found: true, path: '/usr/bin/grep' }
```

check if a group of file exist: 

```js 
  ftool = require('file-tools');
  
  ftool.exists(['/usr/bin/grep', '/usr/bin/cat', '/usr/bin/tail' ]); 
  //return true.
```





