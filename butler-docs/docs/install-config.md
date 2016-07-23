# Installation

Below are the general steps needed to install Butler. Please note that you might need to adapt these to your particular system configuration.   

* **Install node.js**  
  Butler has been developed and tested using the 64 bit version of [node.js](https://nodejs.org/en/download/) 4.4.6.   

* **Decide where to install Butler**  
  It is usually a good starting point to run Butler on the Sense server. If there are more than one server in the Sense cluster, Butler can be placed on the reload server (as the /createDir endpoint then can be used to create folders in which QVD and other files can be stored).
  That said, it is quite possible to run Butler on any server, as long as there is network connectivity to the Sense server(s).  

* **Download Butler**  
  Download the repository zip file or clone the Butler repository using your git tool of choice. Both options achieve the same thing, i.e. a directory such as d:\node\butler, which is then Butler's root directory.  

* **Install node dependencies**  
  From a Windows command prompt (assuming Butler was installed to d:\\node\\butler):  

        d:
        cd \node\butler\src
        npm install  

    This will download and install all node.js modules used by Butler.  

* **Documentation dependencies**  
  If you plan to modify or extend Butler's documentation, you will need to install [MkDocs](http://www.mkdocs.org/).  
  MkDocs is used to create the pages you are reading right now.


# Configuration

Butler uses configuration files in JSON format. The config files are stored in the src\\config folder.  
Butler comes with a default config file called `default.json`. Either update it as needed (see below for details), or make a copy of it and call it `production.json`, then make the needed changes to that file. That way you will not overwrite your customized `default.json` file if you in the future download updated Butler versions from GitHub.  

Note: Butler uses the [node-config](https://github.com/lorenwest/node-config) module to handle config files. As per node-config's documentation, to switch to using the production.json config file, at a command prompt type (for Windows)

    set NODE_ENV=production

  before starting Butler with `node butler.js`.  
  If developing on OSX or Linux, instead use  

    export NODE_ENV=production



## Config file syntax

The `default.json` config file looks like this:

```json
{
  "Butler": {
    "slackConfig": {
      "webhookURL": "<fill in your web hook URL from Slack>",
      "loginNotificationChannel": "<fill in name of Slack channel where audit events (login/logoff etc) should be posted>",
      "taskFailureChannel": "<fill in name of Slack channel where task failure events should be posted>"
    },
    "mqttConfig": {
      "brokerIP": "<IP of MQTT server>",
      "taskFailureTopic": "qliksense/task_failure",
      "taskFailureServerStatusTopic": "qliksense/butler/task_failure_server",
      "sessionStartTopic": "qliksense/session/start",
      "sessionStopTopic": "qliksense/session/stop",
      "connectionOpenTopic": "qliksense/connection/open",
      "connectionCloseTopic": "qliksense/connection/close",
      "taskFailureServerStatusTopic": "qliksense/butler/session_server"
    },
    "udpServerConfig": {
      "serverIP": "<IP of server where Butler is running>",
      "portSessionConnectionEvents": 9997,
      "portTaskFailure": 9998
    },
    "restServerConfig": {
      "serverPort": 8080
    },
    "qrsConfig": {
      "qrsServer": "<FQDN or IP of Sense server>",
      "qrsServerPort": "<Port to connect to, usually 4747>",
      "isSecure": "true",
      "headers": {
          "X-Qlik-User": "UserDirectory=Internal;UserId=sa_repository"
      },
      "cert": "<Path to cert file>",
      "key": "<Path to key file>",
      "rejectUnauthorized": "false"
    }
  }
}
```

Comments:

* Currently Butler assumes that a MQTT broker is present, and that status messages should be sent to Slack. Butler will fail with error messages if it cannot connect to a MQTT server, or if the Slack Webhook URL is not properly set.  
Future versions may make MQTT, Slack and other similar channels optional, using the config file.  

* The default location cert/key files are found in (assuming a standard install of Sense 2.2.4) C:\ProgramData\Qlik\Sense\Repository\Exported Certificates\.Local Certificates  
The files to use are `client.pem` and `client_key.pem`. The config file can point straight to these files.  
