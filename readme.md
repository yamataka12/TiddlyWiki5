<h1> Welcome to <a class='tw-tiddlylink tw-tiddlylink-internal tw-tiddlylink-missing' href='TiddlyWiki5'>TiddlyWiki5</a></h1><div class='tw-tiddler-frame' data-tiddler-target='HelloThere' data-tiddler-template='HelloThere'><p>Welcome to <a class='tw-tiddlylink tw-tiddlylink-internal tw-tiddlylink-missing' href='TiddlyWiki5'>TiddlyWiki5</a>, a reboot of <a class='tw-tiddlylink tw-tiddlylink-internal tw-tiddlylink-resolves' href='TiddlyWiki'>TiddlyWiki</a>, the venerable, reusable non-linear personal web notebook first released in 2004. It is a complete interactive wiki that can run from a single HTML file in the browser or as a powerful <a class='tw-tiddlylink tw-tiddlylink-internal tw-tiddlylink-missing' href='What%20is%20node.js%3F'>node.js application</a>.</p><p><a class='tw-tiddlylink tw-tiddlylink-internal tw-tiddlylink-missing' href='TiddlyWiki5'>TiddlyWiki5</a> is currently at version 5.0.0.a2 and is under active development, which is to say that it is useful but incomplete. You can try out the online prototype at <a class='tw-tiddlylink tw-tiddlylink-external' href='http://tiddlywiki.com/tiddlywiki5'>http://tiddlywiki.com/tiddlywiki5</a>, <a class='tw-tiddlylink tw-tiddlylink-internal tw-tiddlylink-resolves' href='TryingOutTiddlyWiki'>try out the command line incarnation</a>, get involved in the <a class='tw-tiddlylink tw-tiddlylink-external' href='https://github.com/Jermolene/TiddlyWiki5'>development on GitHub</a> or join the discussions on <a class='tw-tiddlylink tw-tiddlylink-external' href='http://groups.google.com/group/TiddlyWikiDev'>the TiddlyWikiDev Google Group</a>.</p></div><h1> Usage</h1><div class='tw-tiddler-frame' data-tiddler-target='CommandLineInterface' data-tiddler-template='CommandLineInterface'><p><a class='tw-tiddlylink tw-tiddlylink-internal tw-tiddlylink-missing' href='TiddlyWiki5'>TiddlyWiki5</a> can be used on the command line to perform an extensive set of operations based on tiddlers, <a class='tw-tiddlylink tw-tiddlylink-internal tw-tiddlylink-resolves' href='TiddlerFiles'>TiddlerFiles</a> and <a class='tw-tiddlylink tw-tiddlylink-internal tw-tiddlylink-missing' href='TiddlyWikiFiles'>TiddlyWikiFiles</a>. For example, this loads the tiddlers from a <a class='tw-tiddlylink tw-tiddlylink-internal tw-tiddlylink-resolves' href='TiddlyWiki'>TiddlyWiki</a> HTML file and then saves one of them in HTML:</p><pre>node core/boot.js --verbose --load mywiki.html --savetiddler ReadMe ./readme.html</pre><h1>Usage</h1><p>Running <code>boot.js</code> from the command line boots the <a class='tw-tiddlylink tw-tiddlylink-internal tw-tiddlylink-resolves' href='TiddlyWiki'>TiddlyWiki</a> kernel, loads the core plugins and establishes an empty wiki store. It then sequentially processes the command line arguments from left to right. The arguments are separated with spaces. The commands are identified by the prefix <code>--</code>.</p><pre>node core/boot.js [--&lt;option&gt; [&lt;arg&gt;[,&lt;arg&gt;]]]</pre><h1>Commands</h1><p>The following commands are available.</p><h1> load</h1><p>Load tiddlers from 2.x.x <a class='tw-tiddlylink tw-tiddlylink-internal tw-tiddlylink-resolves' href='TiddlyWiki'>TiddlyWiki</a> files (<code>.html</code>), <code>.tiddler</code>, <code>.tid</code>, <code>.json</code> or other files </p><pre>--load &lt;filepath&gt;</pre><h1> savetiddler</h1><p>Save an individual tiddler as a specified MIME type, defaults to <code>text/html</code> </p><pre>--savetiddler &lt;title&gt; &lt;filename&gt; [&lt;type&gt;]</pre><h1> wikitest</h1><p>Run wikification tests against the tiddlers in the given directory. Include the <code>save</code> flag to save the test result files as the new targets.</p><pre>--wikitest &lt;dir&gt; [save]</pre><p><code>--wikitest</code> looks for <code>*.tid</code> files in the specified folder. It then wikifies the tiddlers to both &quot;text/plain&quot; and &quot;text/html&quot; format and checks the results against the content of the <code>*.html</code> and <code>*.txt</code> files in the same directory.</p><h1> server</h1><p>The server is very simple. At the root, it serves a rendering of a specified tiddler. Away from the root, it serves individual tiddlers encoded in JSON, and supports the basic HTTP operations for <code>GET</code>, <code>PUT</code> and <code>DELETE</code>.</p><pre>--server &lt;port&gt; &lt;roottiddler&gt; &lt;rendertype&gt; &lt;servetype&gt;</pre><p>For example:</p><pre>--server 8080 $:/core/tiddlywiki5.template.html text/plain text/html</pre><p>The parameters are:</p><pre>--server &lt;port&gt; &lt;roottiddler&gt; &lt;rendertype&gt; &lt;servetype&gt;</pre><ul><li> <strong>port</strong> - port number to serve from (defaults to &quot;8080&quot;)</li><li> <strong>roottiddler</strong> - the tiddler to serve at the root (defaults to &quot;$:/core/tiddlywiki5.template.html&quot;) </li><li> <strong>rendertype</strong> - the content type to which the root tiddler should be rendered (defaults to &quot;text/plain&quot;)</li><li> <strong>servetype</strong> - the content type with which the root tiddler should be served (defaults to &quot;text/html&quot;)</li></ul><h1> dump tiddlers</h1><p>Dump the titles of the tiddlers in the wiki store </p><pre>--dump tiddlers</pre><h1> dump tiddler</h1><p>Dump the fields of an individual tiddler </p><pre>--dump tiddler &lt;title&gt;</pre><h1> dump shadows</h1><p>Dump the titles of the shadow tiddlers in the wiki store </p><pre>--dump shadows</pre><h1> dump config</h1><p>Dump the current core configuration </p><pre>--dump config</pre><h1> verbose</h1><p>Triggers verbose output, useful for debugging </p><pre>--verbose</pre></div><h1> Architecture</h1><div class='tw-tiddler-frame' data-tiddler-target='TiddlyWikiArchitecture' data-tiddler-template='TiddlyWikiArchitecture'><h1> Overview</h1><p>The heart of <a class='tw-tiddlylink tw-tiddlylink-internal tw-tiddlylink-resolves' href='TiddlyWiki'>TiddlyWiki</a> can be seen as an extensible representation transformation engine. Given the text of a tiddler and its associated MIME type, the engine can produce a rendering of the tiddler in a new MIME type. Furthermore, it can efficiently selectively update the rendering to track any changes in the tiddler or its dependents.</p><p>The most important transformations are from <code>text/x-tiddlywiki</code> wikitext into <code>text/html</code> or <code>text/plain</code> but the engine is used throughout the system for other transformations, such as converting images for display in HTML, sanitising fragments of <a class='tw-tiddlylink tw-tiddlylink-internal tw-tiddlylink-missing' href='JavaScript'>JavaScript</a>, and processing CSS.</p><p>The key feature of wikitext is the ability to include one tiddler within another (usually referred to as <em>transclusion</em>). For example, one could have a tiddler called <em>Disclaimer</em> that contains the boilerplate of a legal disclaimer, and then include it within lots of different tiddlers with the macro call <code>&lt;&lt;tiddler Disclaimer&gt;&gt;</code>. This simple feature brings great power in terms of encapsulating and reusing content, and evolving a clean, usable implementation architecture to support it efficiently is a key objective of the <a class='tw-tiddlylink tw-tiddlylink-internal tw-tiddlylink-missing' href='TiddlyWiki5'>TiddlyWiki5</a> design.</p><p>It turns out that the transclusion capability combined with the selective refreshing mechanism provides a good foundation for building <a class='tw-tiddlylink tw-tiddlylink-internal tw-tiddlylink-resolves' href='TiddlyWiki'>TiddlyWiki</a>'s user interface itself. Consider, for example, the <a class='tw-tiddlylink tw-tiddlylink-internal tw-tiddlylink-missing' href='StoryMacro'>StoryMacro</a> in its simplest form:</p><pre>&lt;&lt;story story:MyStoryTiddler&gt;&gt;</pre><p>The story macro looks for a list of tiddler titles in the tiddler <code>MyStoryTiddler</code>, and displays them in sequence. The subtle part is that subsequently, if <code>MyStoryTiddler</code> changes, the <code>&lt;&lt;story&gt;&gt;</code> macro is selectively re-rendered. So, to navigate to a new tiddler, code merely needs to add the name of the tiddler and a line break to the top of <code>MyStoryTiddler</code>:</p><pre>var storyTiddler = store.getTiddler(&quot;MyStoryTiddler&quot;);
store.addTiddler(new Tiddler(storyTiddler,{text: navigateTo + &quot;\n&quot; + storyTiddler.text}));</pre><p>The mechanisms that allow all of this to work are fairly intricate. The sections below progressively build the key architectural concepts of <a class='tw-tiddlylink tw-tiddlylink-internal tw-tiddlylink-missing' href='TiddlyWiki5'>TiddlyWiki5</a> in a way that should provide a good basis for exploring the code directly.</p></div><h1> Plugin Mechanism</h1><div class='tw-tiddler-frame' data-tiddler-target='PluginMechanism' data-tiddler-template='PluginMechanism'><h1>Introduction</h1><p><a class='tw-tiddlylink tw-tiddlylink-internal tw-tiddlylink-missing' href='TiddlyWiki5'>TiddlyWiki5</a> is based on a 500 line boot kernel that runs on node.js or in the browser, and everything else is plugins.</p><p>The kernel boots just enough of the <a class='tw-tiddlylink tw-tiddlylink-internal tw-tiddlylink-resolves' href='TiddlyWiki'>TiddlyWiki</a> environment to allow it to load tiddlers as plugins and execute them (a barebones tiddler class, a barebones wiki store class, some utilities etc.). Plugin modules are written like <code>node.js</code> modules; you can use <code>require()</code> to invoke sub components and to control load order.</p><p>There are several different types of plugins: parsers, serializers, deserializers, macros etc. It goes much further than you might expect. For example, individual tiddler fields are plugins, too: there's a plugin that knows how to handle the <code>tags</code> field, and another that knows how to handle the special behaviour of
the <code>modified</code> and <code>created</code> fields.</p><p>Some plugins have further sub-plugins: the wikitext parser, for instance, accepts rules as individual plugins.</p><h1>Plugins and Modules</h1><p>In <a class='tw-tiddlylink tw-tiddlylink-internal tw-tiddlylink-missing' href='TiddlyWiki5'>TiddlyWiki5</a>, a plugin is a bundle of related tiddlers that are distributed together as a single unit. Plugins can include tiddlers which are <a class='tw-tiddlylink tw-tiddlylink-internal tw-tiddlylink-missing' href='JavaScript'>JavaScript</a> modules. </p><p>The file <code>core/boot.js</code> is a barebones <a class='tw-tiddlylink tw-tiddlylink-internal tw-tiddlylink-resolves' href='TiddlyWiki'>TiddlyWiki</a> kernel that is just sufficient to load the core plugin modules and trigger a startup plugin module to load up the rest of the application.</p><p>The kernel includes:</p><ul><li> Eight short shared utility functions</li><li> Three methods implementing the plugin module mechanism</li><li> The <code>$tw.Tiddler</code> class (and three field definition plugins)</li><li> The <code>$tw.Wiki</code> class (and three tiddler deserialization methods)</li><li> Code for the browser to load tiddlers from the HTML DOM</li><li> Code for the server to load tiddlers from the file system</li></ul><p>Each module is an ordinary <code>node.js</code>-style module, using the <code>require()</code> function to access other modules and the <code>exports</code> global to return <a class='tw-tiddlylink tw-tiddlylink-internal tw-tiddlylink-missing' href='JavaScript'>JavaScript</a> values. The boot kernel smooths over the differences between <code>node.js</code> and the browser, allowing the same plugin modules to execute in both environments.</p><p>In the browser, <code>core/boot.js</code> is packed into a template HTML file that contains the following elements in order:</p><ul><li> Ordinary and shadow tiddlers, packed as HTML <code>&lt;DIV&gt;</code> elements</li><li> <code>core/bootprefix.js</code>, containing a few lines to set up the plugin environment</li><li> Plugin <a class='tw-tiddlylink tw-tiddlylink-internal tw-tiddlylink-missing' href='JavaScript'>JavaScript</a> modules, packed as HTML <code>&lt;SCRIPT&gt;</code> blocks</li><li> <code>core/boot.js</code>, containing the boot kernel</li></ul><p>On the server, <code>core/boot.js</code> is executed directly. It uses the <code>node.js</code> local file API to load plugins directly from the file system in the <code>core/modules</code> directory. The code loading is performed synchronously for brevity (and because the system is in any case inherently blocked until plugins are loaded).</p><p>The boot kernel sets up the <code>$tw</code> global variable that is used to store all the state data of the system.</p><h1>Core </h1><p>The 'core' is the boot kernel plus the set of plugin modules that it loads. It contains plugins of the following types:</p><ul><li> <code>tiddlerfield</code> - defines the characteristics of tiddler fields of a particular name</li><li> <code>tiddlerdeserializer</code> - methods to extract tiddlers from text representations or the DOM</li><li> <code>startup</code> - functions to be called by the kernel after booting</li><li> <code>global</code> - members of the <code>$tw</code> global</li><li> <code>config</code> - values to be merged over the <code>$tw.config</code> global</li><li> <code>utils</code> - general purpose utility functions residing in <code>$tw.utils</code></li><li> <code>tiddlermethod</code> - additional methods for the <code>$tw.Tiddler</code> class</li><li> <code>wikimethod</code> - additional methods for the <code>$tw.Wiki</code> class</li><li> <code>treeutils</code> - static utility methods for parser tree nodes </li><li> <code>treenode</code> - classes of parser tree nodes</li><li> <code>macro</code> - macro definitions</li><li> <code>editor</code> - interactive editors for different types of content</li><li> <code>parser</code> - parsers for different types of content</li><li> <code>wikitextrule</code> - individual rules for the wikitext parser</li><li> <code>command</code> - individual commands for the <code>$tw.Commander</code> class</li></ul><p><a class='tw-tiddlylink tw-tiddlylink-internal tw-tiddlylink-missing' href='TiddlyWiki5'>TiddlyWiki5</a> makes extensive use of <a class='tw-tiddlylink tw-tiddlylink-internal tw-tiddlylink-missing' href='JavaScript'>JavaScript</a> inheritance:</p><ul><li> Tree nodes defined in <code>$:/core/treenodes/</code> all inherit from <code>$:/core/treenodes/node.js</code></li><li> Macros defined in <code>$:/core/macros/</code> all inherit from <code>$:/core/treenodes/macro.js</code></li></ul><p><code>tiddlywiki.plugin</code> files
</p></div><p><em>This <code>readme</code> file was automatically generated by <a class='tw-tiddlylink tw-tiddlylink-internal tw-tiddlylink-missing' href='TiddlyWiki5'>TiddlyWiki5</a></em>
</p>