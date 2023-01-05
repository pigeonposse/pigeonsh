<!--

██████╗ ██╗ ██████╗ ███████╗ ██████╗ ███╗   ██╗                
██╔══██╗██║██╔════╝ ██╔════╝██╔═══██╗████╗  ██║                
██████╔╝██║██║  ███╗█████╗  ██║   ██║██╔██╗ ██║                
██╔═══╝ ██║██║   ██║██╔══╝  ██║   ██║██║╚██╗██║                
██║     ██║╚██████╔╝███████╗╚██████╔╝██║ ╚████║                
╚═╝     ╚═╝ ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝                
                                                               
██████╗  ██████╗ ███████╗███████╗███████╗                      
██╔══██╗██╔═══██╗██╔════╝██╔════╝██╔════╝                      
██████╔╝██║   ██║███████╗███████╗█████╗                        
██╔═══╝ ██║   ██║╚════██║╚════██║██╔══╝                        
██║     ╚██████╔╝███████║███████║███████╗                      
╚═╝      ╚═════╝ ╚══════╝╚══════╝╚══════╝                      
                                                               
                                                               
                                                               
█████╗█████╗█████╗█████╗█████╗█████╗█████╗█████╗               
╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝╚════╝               
                                                               
                                                               
                                                               
██████╗ ██╗ ██████╗ ███████╗ ██████╗ ███╗   ██╗███████╗██╗  ██╗
██╔══██╗██║██╔════╝ ██╔════╝██╔═══██╗████╗  ██║██╔════╝██║  ██║
██████╔╝██║██║  ███╗█████╗  ██║   ██║██╔██╗ ██║███████╗███████║
██╔═══╝ ██║██║   ██║██╔══╝  ██║   ██║██║╚██╗██║╚════██║██╔══██║
██║     ██║╚██████╔╝███████╗╚██████╔╝██║ ╚████║███████║██║  ██║
╚═╝     ╚═╝ ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝                                                    

CREATED BY ANGELO
FOR PIGEONPOSSE.COM

-->

# PIGEONSH by PIGEONPOSSE™

[![License](https://img.shields.io/github/license/pigeon-posse/pigeonsh?color=blue&label=License&style=flat-square)](https://npmjs.com/package/@pigeon-posse/pigeonsh)
[![Version](https://img.shields.io/npm/v/@pigeon-posse/pigeonsh?color=a1b858&label&style=flat-square)](https://npmjs.com/package/@pigeon-posse/pigeonsh)
[![Web](https://img.shields.io/badge/Web-grey?style=flat-square)](https://pigeonposse.com/) 
[![About us](https://img.shields.io/badge/About-us-grey?style=flat-square)](https://pigeonposse.com/?popup=about) 
[![Donate](https://img.shields.io/badge/Donate-pink?style=flat-square)](https://pigeonposse.com/?popup=donate) 

> :warning: **This package is still in _beta_ version**. It can be installed and used but things may change in the future.

## 🗒 Description

Centralize your server scripts in a single folder and run them using the ```psh``` or ```pigeonsh``` command.
Can be used with ```.sh```, ```.js```, and ```.py``` files

## 🔑 Installation

### ⚡️ Using NPM

```bash
npm install -g @pigeon-posse/pigeonsh
```

### ☢️ With the executable _(not recommended)_

1. Clone the repository and go to the dist folder.
2. Copy the executable corresponding to your operating system in your ```bin``` folder

## ⚙️ Usage

### Write scripts

You can write your scripts in your ```${USER}/.scriptsrc``` folder. The structure for the script to work must be:

```bash
- ${USER}/.scriptsrc
	- 📂 [script-name] 
		- 📝 main.[sh, js, py]
		- 📜 info.[yml, yaml, json] # not required
```

<details><summary>ℹ️ Explanation</summary>

<br>
<li> 
	<code>[script-name]</code>: The name of the folder will be the name that you execute from the <code>psh</code> command. 
Folder name must not contain spaces.
</li>
<br>

<li> 
	<code>main.[sh, js, py]</code>: The main file is the file that will be executed, here you will write your code. It could be <code>.sh</code>, <code>.js</code>, <code>.py</code>. <b>main.sh</b> example:

	```bash
	#!/bin/sh

	echo "Hello Pigeon 🐦🌈"
	```
</li>
<br>

<li> 
	<code>info.[yml, yaml, json]</code>: Not required. In this file you will add the information of your scripts. <b>info.yml</b> example:

	```yaml
	description: Print hello message.
	version: 1.0.0
	```
</li>
<br>
</details>

### Execute scripts

####  ``` psh list```
Running this command lists all the scripts saved in your ```${user}/.scriptsrc``` folder.
For example in a clean installation, show the default scripts:

```bash
$ psh list

# return the default scripts
hello
aliasrc
hosts 
```

####  ```psh [script-name]``` or ```psh exec [script-name]```
Running this command will run the scripts with the same name if they exist. 
For example, if we want to execute the default script ```hello```:

```bash
$ psh hello
# or
$ psh exec hello

# return the hello script
Hello Pigeon 🐦🌈
```

####  ```psh info [script-name]```
Running this command will display info of script.

```bash
$ psh info hello

# return the script info.
{
	"description": "Print hello message",
	"version": "1.0.0"
}
```

## 👨‍💻 Development

You can contribute via **_Github_**

[![Issues](https://img.shields.io/badge/Issues-grey?style=flat-square)](https://github.com/pigeon-posse/pigeonsh/issues)
[![Pull requests](https://img.shields.io/badge/Pulls-grey?style=flat-square)](https://github.com/pigeon-posse/pigeonsh/pulls)


## ☕ Donate

Help us to develop more interesting things.

[![Donate](https://img.shields.io/badge/Donate-grey?style=flat-square)](https://pigeonposse.com/?popup=donate) 


## 📜 License

This sofware is licensed with GPLv3 (GNU GENERAL PUBLIC LICENSE Version 3)

[![Read more](https://img.shields.io/badge/Read-more-grey?style=flat-square)](https://github.com/pigeon-posse/pigeonsh/blob/main/LICENSE)

## 🐦 About us

_PigeonPosse_ is a ✨ **code development collective** ✨ focused on creating practical and interesting tools that help developers and users enjoy a more agile and comfortable experience. Our projects cover various programming sectors and we do not have a thematic limitation in terms of projects.

[![More](https://img.shields.io/badge/Read-more-grey?style=flat-square)](https://github.com/PigeonPosse/PigeonPosse)

### Collaborators

|                                                                                    | Name        | Role         | GitHub                                         |
| ---------------------------------------------------------------------------------- | ----------- | ------------ | ---------------------------------------------- |
| <img src="https://github.com/AngelEspejo.png?size=72" style="border-radius:100%"/> | AngelEspejo | Author       | [@AngelEspejo](https://github.com/AngelEspejo) |
| <img src="https://github.com/PigeonPosse.png?size=72" style="border-radius:100%"/> | PigeonPosse | Collective	  | [@PigeonPosse](https://github.com/PigeonPosse) |


<br>