"use strict";(self.webpackChunkwww=self.webpackChunkwww||[]).push([[91205],{48546:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=i(87462),n=(i(67294),i(3905));i(61839);const o={title:"DB Migration",description:"DB Migration\n",sidebar_position:3},r=void 0,l={unversionedId:"DeveloperManuals/DBMigration",id:"version-v0.16/DeveloperManuals/DBMigration",title:"DB Migration",description:"DB Migration\n",source:"@site/versioned_docs/version-v0.16/DeveloperManuals/DBMigration.md",sourceDirName:"DeveloperManuals",slug:"/DeveloperManuals/DBMigration",permalink:"/docs/DeveloperManuals/DBMigration",draft:!1,editUrl:"https://github.com/apache/incubator-devlake-website/edit/main/versioned_docs/version-v0.16/DeveloperManuals/DBMigration.md",tags:[],version:"v0.16",sidebarPosition:3,frontMatter:{title:"DB Migration",description:"DB Migration\n",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Plugin Implementation",permalink:"/docs/DeveloperManuals/PluginImplementation"},next:{title:"Notifications",permalink:"/docs/DeveloperManuals/Notifications"}},s={},p=[{value:"Summary",id:"summary",level:2},{value:"Migration Scripts",id:"migration-scripts",level:2},{value:"The Migration Model",id:"the-migration-model",level:2},{value:"Table <code>migration_history</code>",id:"table-migration_history",level:2},{value:"Execution",id:"execution",level:2},{value:"How It Works",id:"how-it-works",level:2},{value:"Best Practices",id:"best-practices",level:2}],m={toc:p};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"Starting in v0.10.0, DevLake provides a lightweight migration tool for executing migration scripts.\nBoth the framework and the plugins can define their migration scripts in their own migration folder.\nThe migration scripts are written with gorm in Golang to support different SQL dialects."),(0,n.kt)("h2",{id:"migration-scripts"},"Migration Scripts"),(0,n.kt)("p",null,"The migration scripts describe how to do database migration and implement the ",(0,n.kt)("inlineCode",{parentName:"p"},"MigrationScript")," interface.\nWhen DevLake starts, the scripts register themselves to the framework by invoking the ",(0,n.kt)("inlineCode",{parentName:"p"},"Register")," function.\nThe method ",(0,n.kt)("inlineCode",{parentName:"p"},"Up")," contains the steps of migration."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},"type MigrationScript interface {\n    // this function will contain the business logic of the migration (e.g. DDL logic)\n    Up(basicRes BasicRes) errors.Error\n    // the version number of the migration. typically in date format (YYYYMMDDHHMMSS), e.g. 20220728000001. Migrations are executed sequentially based on this number.\n    Version() uint64\n    // The name of this migration\n    Name() string\n}\n")),(0,n.kt)("h2",{id:"the-migration-model"},"The Migration Model"),(0,n.kt)("p",null,'For each migration, we define a "snapshot" datamodel of the model that we wish to perform the migration on.\nThe fields on this model shall be identical to the actual model; but unlike the actual one, this one will\nnever change in the future. The naming convention of these models is ',(0,n.kt)("inlineCode",{parentName:"p"},"<ModelName>YYYYMMDD")," and they must implement\nthe ",(0,n.kt)("inlineCode",{parentName:"p"},"func TableName() string")," method, and consumed by the ",(0,n.kt)("inlineCode",{parentName:"p"},"Script::Up")," method."),(0,n.kt)("h2",{id:"table-migration_history"},"Table ",(0,n.kt)("inlineCode",{parentName:"h2"},"migration_history")),(0,n.kt)("p",null,"The table tracks migration scripts execution and schemas changes, and from which, DevLake can figure out the current state of database schemas."),(0,n.kt)("h2",{id:"execution"},"Execution"),(0,n.kt)("p",null,"Each plugin has a ",(0,n.kt)("inlineCode",{parentName:"p"},"migrationscripts")," subpackage that lists all the migrations to be executed for that plugin. You\nwill need to add your migration to that list for the framework to pick it up. Similarly, there is a package\nfor the framework-only migrations defined under the ",(0,n.kt)("inlineCode",{parentName:"p"},"models")," package."),(0,n.kt)("h2",{id:"how-it-works"},"How It Works"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Check ",(0,n.kt)("inlineCode",{parentName:"li"},"migration_history")," table, calculate all the migration scripts need to be executed."),(0,n.kt)("li",{parentName:"ol"},"Sort scripts by ",(0,n.kt)("inlineCode",{parentName:"li"},"Version")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Name")," in ascending order. Please do NOT change these two values for the script after release for any reasons; otherwise, users may fail to upgrade due to the duplicated execution."),(0,n.kt)("li",{parentName:"ol"},"Execute the scripts."),(0,n.kt)("li",{parentName:"ol"},"Save the results in the ",(0,n.kt)("inlineCode",{parentName:"li"},"migration_history")," table.")),(0,n.kt)("h2",{id:"best-practices"},"Best Practices"),(0,n.kt)("p",null,"When you write a new migration script, please pay attention to the fault tolerance and the side effect. It would be better if the failed script could be safely retried, in case if something goes wrong during the migration. For this purpose, the migration scripts should be well-designed. For example, if you have created a temporary table in the Up method, it should be dropped before exiting, regardless of success or failure. "),(0,n.kt)("p",null,"Suppose we want to change the type of the Primary Key ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," of table ",(0,n.kt)("inlineCode",{parentName:"p"},"users")," from ",(0,n.kt)("inlineCode",{parentName:"p"},"int")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"varchar(255)")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Rename ",(0,n.kt)("inlineCode",{parentName:"li"},"users")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"users_20221018")," (stop if error, otherwise define a ",(0,n.kt)("inlineCode",{parentName:"li"},"defer")," to rename back on error)"),(0,n.kt)("li",{parentName:"ol"},"Create new ",(0,n.kt)("inlineCode",{parentName:"li"},"users")," (stop if error, otherwise define a ",(0,n.kt)("inlineCode",{parentName:"li"},"defer")," to drop the table on error)"),(0,n.kt)("li",{parentName:"ol"},"Convert data from ",(0,n.kt)("inlineCode",{parentName:"li"},"users_20221018")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"users")," (stop if error)"),(0,n.kt)("li",{parentName:"ol"},"Drop table ",(0,n.kt)("inlineCode",{parentName:"li"},"users_20221018"))),(0,n.kt)("p",null,"With these steps, the ",(0,n.kt)("inlineCode",{parentName:"p"},"defer")," functions would be executed in reverse order if any error occurred during the migration process so the database would roll back to the original state in most cases."),(0,n.kt)("p",null,"However, you don't neccessary deal with all the mess. We had summarized some of the most useful code examples for you to follow:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/blob/main/models/migrationscripts/20220406_add_frame_tables.go"},"Create new tables"),(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/blob/main/models/migrationscripts/20220505_rename_pipeline_step_to_stage.go"},"Rename column")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/blob/main/models/migrationscripts/20220616_add_blueprint_mode.go"},"Add columns with default value")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/blob/main/models/migrationscripts/20220913_fix_commitfile_id_toolong.go"},"Change the values(or type) of Primary Key")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-devlake/blob/main/models/migrationscripts/20220903_encrypt_blueprint.go"},"Change the values(or type) of Column"))),(0,n.kt)("p",null,"The above examples should cover most of the scenarios you may encounter. If you come across other scenarios, feel free to create issues in our GitHub Issue Tracker for discussions. "),(0,n.kt)("p",null,"In order to help others understand the script you have written, there are a couple of rules we suggest to follow:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Name your script in a meaningful way. For instance, ",(0,n.kt)("inlineCode",{parentName:"li"},"renamePipelineStepToStage")," is more descriptive than ",(0,n.kt)("inlineCode",{parentName:"li"},"modifyPipelines"),"."),(0,n.kt)("li",{parentName:"ul"},"The script should keep only the targeted ",(0,n.kt)("inlineCode",{parentName:"li"},"fields")," you are attempting to operate except when using ",(0,n.kt)("inlineCode",{parentName:"li"},"migrationhelper.Transform"),", which is a full table tranformation that requires full table definition. If this is the case, add comment to the end of the fields to indicate which ones are the targets."),(0,n.kt)("li",{parentName:"ul"},"Add comments to the script when the operation is too complicated to be expressed in plain code.")),(0,n.kt)("p",null,"Other rules to follow when writing a migration script:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The migration script should only use the interfaces and packages offered by the framework like ",(0,n.kt)("inlineCode",{parentName:"li"},"core"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"errors")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"migrationhelper"),". Do NOT import ",(0,n.kt)("inlineCode",{parentName:"li"},"gorm")," or package from ",(0,n.kt)("inlineCode",{parentName:"li"},"plugin")," directly."),(0,n.kt)("li",{parentName:"ul"},"The name of ",(0,n.kt)("inlineCode",{parentName:"li"},"model struct")," defined in your script should be suffixed with the ",(0,n.kt)("inlineCode",{parentName:"li"},"Version")," of the script to distinguish from other scripts in the same package to keep it self-contained, i.e. ",(0,n.kt)("inlineCode",{parentName:"li"},"tasks20221018"),". Do NOT refer ",(0,n.kt)("inlineCode",{parentName:"li"},"struct")," defined in other scripts."),(0,n.kt)("li",{parentName:"ul"},"All scripts and models names should be ",(0,n.kt)("inlineCode",{parentName:"li"},"camelCase")," to avoid accidental reference from other packages.")))}d.isMDXComponent=!0}}]);