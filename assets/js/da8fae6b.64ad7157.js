"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[29383],{58686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));n(61839);const l={title:"Project",sidebar_position:5,description:"`Project` is **a set of [Scope](/docs/Overview/KeyConcepts#data-scope) from different domains**, a way to group different resources, and it is crucial for some metric calculations like `Dora`.\n"},i="Summary",o={unversionedId:"DeveloperManuals/Project",id:"version-v0.16/DeveloperManuals/Project",title:"Project",description:"`Project` is **a set of [Scope](../Overview/KeyConcepts.md#data-scope) from different domains**, a way to group different resources, and it is crucial for some metric calculations like `Dora`.\n",source:"@site/versioned_docs/version-v0.16/DeveloperManuals/Project.md",sourceDirName:"DeveloperManuals",slug:"/DeveloperManuals/Project",permalink:"/docs/DeveloperManuals/Project",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.16/DeveloperManuals/Project.md",tags:[],version:"v0.16",sidebarPosition:5,frontMatter:{title:"Project",sidebar_position:5,description:"`Project` is **a set of [Scope](../Overview/KeyConcepts.md#data-scope) from different domains**, a way to group different resources, and it is crucial for some metric calculations like `Dora`.\n"},sidebar:"docsSidebar",previous:{title:"Dal",permalink:"/docs/DeveloperManuals/Dal"},next:{title:"Tag Naming Conventions",permalink:"/docs/DeveloperManuals/TagNamingConventions"}},p={},s=[{value:"projects",id:"projects",level:2},{value:"example",id:"example",level:3},{value:"project_metric_settings",id:"project_metric_settings",level:2},{value:"example",id:"example-1",level:3},{value:"project_mapping",id:"project_mapping",level:2},{value:"example",id:"example-2",level:3},{value:"Data Source Plugin",id:"data-source-plugin",level:2},{value:"the DataSourcePluginBlueprintV200 interface",id:"the-datasourcepluginblueprintv200-interface",level:2},{value:"Metric Plugins",id:"metric-plugins",level:2},{value:"The PluginMetric Interface",id:"the-pluginmetric-interface",level:2},{value:"References",id:"references",level:2}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"summary"},"Summary"),(0,r.kt)("p",null,"For some metric calculations such as the ",(0,r.kt)("inlineCode",{parentName:"p"},"DORA")," metric, we often encounter situations requiring comprehensive calculations based on data from multiple data sources."),(0,r.kt)("p",null,"For example, we may use ",(0,r.kt)("inlineCode",{parentName:"p"},"GitLab")," for code hosting, ",(0,r.kt)("inlineCode",{parentName:"p"},"Jenkins")," for CI/CD, to calculate PR deployment cycle time, we need to know which ",(0,r.kt)("inlineCode",{parentName:"p"},"GitLab Projects")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Jenkins Jobs")," are related for correctness and performance reasons."),(0,r.kt)("p",null,"However, in most cases, we have multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"GitLab Projects")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"Jenkins Jobs")," that belong to different teams in our Apache DevLake database."),(0,r.kt)("p",null,"To distinguish them into different groups. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Project")," is introduced in v0.15. Essentially, a ",(0,r.kt)("inlineCode",{parentName:"p"},"project")," consists of a set of ",(0,r.kt)("a",{parentName:"p",href:"/docs/Overview/KeyConcepts#data-scope"},"Scopes"),", i.e., a couple of ",(0,r.kt)("inlineCode",{parentName:"p"},"GitLab Projects"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Jira Boards")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"Jenkins Jobs"),", etc."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Project")," is ",(0,r.kt)("strong",{parentName:"p"},"a set of ",(0,r.kt)("a",{parentName:"strong",href:"/docs/Overview/KeyConcepts#data-scope"},"Scope")," from different domains"),", a way to group different resources, and it is crucial for some metric calculation like ",(0,r.kt)("inlineCode",{parentName:"p"},"Dora"),"."),(0,r.kt)("p",null,"Next, let us introduce ",(0,r.kt)("inlineCode",{parentName:"p"},"Project")," in the following order:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Project")," related models"),(0,r.kt)("li",{parentName:"ul"},"Related APIs that can be used to manipulate ",(0,r.kt)("inlineCode",{parentName:"li"},"Project")," models"),(0,r.kt)("li",{parentName:"ul"},"The interface that needs to be implemented when developing various plugins to support the ",(0,r.kt)("inlineCode",{parentName:"li"},"Project"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The interface that needs to be implemented to develop the ",(0,r.kt)("inlineCode",{parentName:"li"},"Data Source Plugin")),(0,r.kt)("li",{parentName:"ul"},"The interface that needs to be implemented to develop the ",(0,r.kt)("inlineCode",{parentName:"li"},"Metric Plugins"))))),(0,r.kt)("h1",{id:"models"},"Models"),(0,r.kt)("p",null,"To support project we contains the following three models:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"projects")," describes a project object, including its name, creation and update time and other basic information"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"project_metric_settings")," describes what metric plugins a project had enabled."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"project_mapping")," describes the mapping relationship of project and scope, including the name of the project\u3001the table name of ",(0,r.kt)("a",{parentName:"li",href:"/docs/Overview/KeyConcepts#data-scope"},"Scope")," and the row_id in the ",(0,r.kt)("a",{parentName:"li",href:"/docs/Overview/KeyConcepts#data-scope"},"Scope")," table.")),(0,r.kt)("h2",{id:"projects"},"projects"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"field")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"length")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"key")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"varchar"),(0,r.kt)("td",{parentName:"tr",align:null},"255"),(0,r.kt)("td",{parentName:"tr",align:null},"name for project"),(0,r.kt)("td",{parentName:"tr",align:null},"PK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"description")),(0,r.kt)("td",{parentName:"tr",align:null},"longtext"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"description of the project"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"created_at")),(0,r.kt)("td",{parentName:"tr",align:null},"datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"created time of project"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"updated_at")),(0,r.kt)("td",{parentName:"tr",align:null},"datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"last updated time of project"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"example"},"example"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"describe")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"created_at")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"updated_at")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project_1"),(0,r.kt)("td",{parentName:"tr",align:null},"this is one of the test projects"),(0,r.kt)("td",{parentName:"tr",align:null},"2022-11-01 01:22:13.000"),(0,r.kt)("td",{parentName:"tr",align:null},"2022-11-01 02:24:15.000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project_2"),(0,r.kt)("td",{parentName:"tr",align:null},"this is another project test project"),(0,r.kt)("td",{parentName:"tr",align:null},"2022-11-01 01:23:29.000"),(0,r.kt)("td",{parentName:"tr",align:null},"2022-11-01 02:27:24.000")))),(0,r.kt)("h2",{id:"project_metric_settings"},"project_metric_settings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"field")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"length")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"key")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"project_name")),(0,r.kt)("td",{parentName:"tr",align:null},"varchar"),(0,r.kt)("td",{parentName:"tr",align:null},"255"),(0,r.kt)("td",{parentName:"tr",align:null},"name for project"),(0,r.kt)("td",{parentName:"tr",align:null},"PK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"plugin_name")),(0,r.kt)("td",{parentName:"tr",align:null},"varchar"),(0,r.kt)("td",{parentName:"tr",align:null},"255"),(0,r.kt)("td",{parentName:"tr",align:null},"name for plugin"),(0,r.kt)("td",{parentName:"tr",align:null},"PK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"plugin_option")),(0,r.kt)("td",{parentName:"tr",align:null},"longtext"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"check if metric plugins have been enabled by the project"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"enable")),(0,r.kt)("td",{parentName:"tr",align:null},"tinyint"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"if the metric plugins is enabled"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"example-1"},"example"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"project_name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"plugin_name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"plugin_option")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"enable")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project_1"),(0,r.kt)("td",{parentName:"tr",align:null},"dora"),(0,r.kt)("td",{parentName:"tr",align:null},"{}"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project_2"),(0,r.kt)("td",{parentName:"tr",align:null},"dora"),(0,r.kt)("td",{parentName:"tr",align:null},"{}"),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("h2",{id:"project_mapping"},"project_mapping"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"field")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"length")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"description")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"key")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"project_name")),(0,r.kt)("td",{parentName:"tr",align:null},"varchar"),(0,r.kt)("td",{parentName:"tr",align:null},"255"),(0,r.kt)("td",{parentName:"tr",align:null},"name for project"),(0,r.kt)("td",{parentName:"tr",align:null},"PK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"table")),(0,r.kt)("td",{parentName:"tr",align:null},"varchar"),(0,r.kt)("td",{parentName:"tr",align:null},"255"),(0,r.kt)("td",{parentName:"tr",align:null},"the table name of ",(0,r.kt)("a",{parentName:"td",href:"/docs/Overview/KeyConcepts#data-scope"},"Scope")),(0,r.kt)("td",{parentName:"tr",align:null},"PK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"row_id")),(0,r.kt)("td",{parentName:"tr",align:null},"varchar"),(0,r.kt)("td",{parentName:"tr",align:null},"255"),(0,r.kt)("td",{parentName:"tr",align:null},"the row_id in the ",(0,r.kt)("a",{parentName:"td",href:"/docs/Overview/KeyConcepts#data-scope"},"Scope")," table"),(0,r.kt)("td",{parentName:"tr",align:null},"PK")))),(0,r.kt)("h3",{id:"example-2"},"example"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"project_name")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"table")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"row_id")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project_1"),(0,r.kt)("td",{parentName:"tr",align:null},"Repo"),(0,r.kt)("td",{parentName:"tr",align:null},"gitlab:GithubRepo:1:lake")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project_1"),(0,r.kt)("td",{parentName:"tr",align:null},"Board"),(0,r.kt)("td",{parentName:"tr",align:null},"jira:JiraBoard:1:lake")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"project_2"),(0,r.kt)("td",{parentName:"tr",align:null},"Repo"),(0,r.kt)("td",{parentName:"tr",align:null},"github:GithubRepo:1:lake")))),(0,r.kt)("h1",{id:"how-to-manage-project-via-api"},"How to manage project via API"),(0,r.kt)("p",null,"For API specification, please check the swagger doc(by visiting ",(0,r.kt)("inlineCode",{parentName:"p"},"[Your Config-UI Host]/api/swagger/index.html"),").\nRelated endpoints:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"/projects"),(0,r.kt)("li",{parentName:"ol"},"/projects/:projectName/metrics"),(0,r.kt)("li",{parentName:"ol"},"/plugins")),(0,r.kt)("h1",{id:"the-interface-that-needs-to-be-implemented"},"The interface that needs to be implemented"),(0,r.kt)("p",null,"We divide plugins into two categories"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The first category is ",(0,r.kt)("inlineCode",{parentName:"li"},"Data Source Plugin"),", such as ",(0,r.kt)("inlineCode",{parentName:"li"},"GitLab")," ",(0,r.kt)("inlineCode",{parentName:"li"},"GitHub")," ",(0,r.kt)("inlineCode",{parentName:"li"},"Jira")," ",(0,r.kt)("inlineCode",{parentName:"li"},"Jenkins"),", etc. These plugins collect data from various data sources"),(0,r.kt)("li",{parentName:"ul"},"The second category is ",(0,r.kt)("inlineCode",{parentName:"li"},"Metric Plugin"),", such as ",(0,r.kt)("inlineCode",{parentName:"li"},"Dora"),", etc. These plugins do not directly contact the data source but do secondary calculations based on the collected data after the ",(0,r.kt)("inlineCode",{parentName:"li"},"Data Source Plugin")," works")),(0,r.kt)("h2",{id:"data-source-plugin"},"Data Source Plugin"),(0,r.kt)("p",null,"For example ",(0,r.kt)("inlineCode",{parentName:"p"},"GitLab")," ",(0,r.kt)("inlineCode",{parentName:"p"},"GitHub")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Jira")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Jenkins")," etc."),(0,r.kt)("p",null,"These plugins, from various data sources, extract data into the database and store them, they deal directly with the data source, so we classify them as ",(0,r.kt)("inlineCode",{parentName:"p"},"Data Source Plugin"),"."),(0,r.kt)("h2",{id:"the-datasourcepluginblueprintv200-interface"},"the DataSourcePluginBlueprintV200 interface"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Data Source Plugin")," needs to implement ",(0,r.kt)("inlineCode",{parentName:"p"},"DataSourcePluginBlueprintV200")," interface to support ",(0,r.kt)("inlineCode",{parentName:"p"},"project")),(0,r.kt)("p",null,"The interface definition for this interface is as follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"// DataSourcePluginBlueprintV200 extends the V100 to provide support for\n// Project, so that complex metrics like DORA can be implemented based on a set\n// of Data Scopes\ntype DataSourcePluginBlueprintV200 interface {\n    MakeDataSourcePipelinePlanV200(\n        connectionId uint64,\n        scopes []*BlueprintScopeV200,\n        syncPolicy BlueprintSyncPolicy,\n    ) (PipelinePlan, []Scope, errors.Error)\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"scopes")," in input parameters is a set of arrays containing IDs, Names, and Entities."),(0,r.kt)("p",null,"The input data format is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'[]*core.BlueprintScopeV200{\n    {\n        Entities: []string{"CODE", "TICKET",  "CICD"},\n        Id:       "37",\n        Name:     "test",\n    },\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"syncPolicy")," in input parameters contains some option settings, whose structure is defined as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type BlueprintSyncPolicy struct {\n    Version          string     `json:"version" validate:"required,semver,oneof=1.0.0"`\n    SkipOnFail       bool       `json:"skipOnFail"`\n    CreatedDateAfter *time.Time `json:"createdDateAfter"`\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PipelinePlan")," in output is a part of blueprint JSON:"),(0,r.kt)("p",null,"The input data format is as follows:(Take GitLab plugin as an example)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'core.PipelinePlan{\n    {\n        {\n            Plugin: "gitlab",\n            Subtasks: []string{\n                tasks.ConvertProjectMeta.Name,\n                tasks.CollectApiIssuesMeta.Name,\n                tasks.ExtractApiIssuesMeta.Name,\n                tasks.ConvertIssuesMeta.Name,\n                tasks.ConvertIssueLabelsMeta.Name,\n                tasks.CollectApiJobsMeta.Name,\n                tasks.ExtractApiJobsMeta.Name,\n                tasks.CollectApiPipelinesMeta.Name,\n                tasks.ExtractApiPipelinesMeta.Name,\n            },\n            Options: map[string]interface{}{\n                "connectionId": uint64(1),\n                "projectId":    testID,\n            },\n        },\n        {\n            Plugin: "gitextractor",\n            Options: map[string]interface{}{\n                "proxy":  "",\n                "repoId": repoId,\n                "url":    "https://git:nddtf@this_is_cloneUrl",\n            },\n        },\n    },\n    {\n        {\n            Plugin: "refdiff",\n            Options: map[string]interface{}{\n                "tagsLimit":   10,\n                "tagsOrder":   "reverse semver",\n                "tagsPattern": "pattern",\n            },\n        },\n    },\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"project")," needs to provide a specific set of ",(0,r.kt)("a",{parentName:"p",href:"/docs/Overview/KeyConcepts#data-scope"},"Scopes")," for a specific ",(0,r.kt)("inlineCode",{parentName:"p"},"connection")," to the plugin through this interface, and then obtain the plugin involved in the ",(0,r.kt)("inlineCode",{parentName:"p"},"PipelineTask")," All ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins")," and corresponding parameter information. At the same time, the plugin needs to convert entities like ",(0,r.kt)("inlineCode",{parentName:"p"},"repo")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"board")," in the data source into a ",(0,r.kt)("inlineCode",{parentName:"p"},"scope interface")," that ",(0,r.kt)("inlineCode",{parentName:"p"},"project")," can understand"),(0,r.kt)("p",null,"The corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"scope interface")," has been implemented at following files of in the framework layer:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"models/domainlayer/devops/cicd_scope.go")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"models/domainlayer/ticket/board.go")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"models/domainlayer/code/repo.go"))),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins/gitlab/impl/impl.go")," file, there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"GitLab")," plugin implementation of the above interface, which can be used as a reference."),(0,r.kt)("p",null,"And the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins/gitlab/api/blueprint_v200.go")," contains implementation details. "),(0,r.kt)("p",null,"The following files contain the models that the relevant implementations depend on for reference:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"plugins/gitlab/models/project.go")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"plugins/gitlab/models/transformation_rule.go"))),(0,r.kt)("h2",{id:"metric-plugins"},"Metric Plugins"),(0,r.kt)("p",null,"For example ",(0,r.kt)("inlineCode",{parentName:"p"},"Dora"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Refdff")," plugins belong to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Metric Plugins")),(0,r.kt)("p",null,"These plugins are mainly for calculating various metrics, they do not directly contact the data source, so we classify them as ",(0,r.kt)("inlineCode",{parentName:"p"},"Metric Plugins"),"."),(0,r.kt)("h2",{id:"the-pluginmetric-interface"},"The PluginMetric Interface"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Metric Plugins")," needs to implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"PluginMetric")," interface to support ",(0,r.kt)("inlineCode",{parentName:"p"},"project")),(0,r.kt)("p",null,"The interface definition for this interface looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type PluginMetric interface {\n    // returns a list of required data entities and expected features.\n    // [{ "model": "cicd_tasks", "requiredFields": {"column": "type", "execptedValue": "Deployment"}}, ...]\n    RequiredDataEntities() (data []map[string]interface{}, err errors.Error)\n\n    // returns if the metric depends on Project for calculation.\n    // Currently, only dora would return true.\n    IsProjectMetric() bool\n\n    // indicates which plugins must be executed before executing this one.\n    // declare a set of dependencies with this\n    RunAfter() ([]string, errors.Error)\n\n    // returns an empty pointer of the plugin setting struct.\n    // (no concrete usage at this point)\n    Settings() (p interface{})\n}\n\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Project")," needs ",(0,r.kt)("inlineCode",{parentName:"p"},"PluginMetric")," to know whether a ",(0,r.kt)("inlineCode",{parentName:"p"},"Metric Plugin")," is dependent on ",(0,r.kt)("inlineCode",{parentName:"p"},"project"),", and the tables and fields required in its calculation process."),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins/dora/impl/impl.go")," file, there is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Dora")," plugin implementation of the above interface, which can be used as a sample reference.You can find it by searching the following fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"func (plugin Dora) RequiredDataEntities() (data []map[string]interface{}, err errors.Error)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"func (plugin Dora) IsProjectMetric() bool")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"func (plugin Dora) RunAfter() ([]string, errors.Error)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"func (plugin Dora) Settings() interface{}"))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("p",null,"To dig deeper into developing and utilizing our built-in functions and have a better developer experience, feel free to dive into our ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/apache/incubator-devlake"},"godoc")," reference."))}m.isMDXComponent=!0}}]);