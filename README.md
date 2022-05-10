# WebbProject-yr3

This project requires Visual Studio Code 2019 or 2022 (https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=Community&channel=Release&version=VS2022&source=VSLandingPage&cid=2030&passive=false), NodeJS (https://nodejs.org/dist/v16.14.2/node-v16.14.2-x64.msi) and Git (https://github.com/git-for-windows/git/releases/download/v2.36.0.windows.1/Git-2.36.0-64-bit.exe)


Step 1.

Open the commandline or powershell and type:
```
git clone https://github.com/Someonexddd/WebbProject-Yr3-React18.git
```

Step 2.

Open the folder webbproject-yr3 and the folder below with the same name. 
Double click on the .sln file (im assuming you have vs 2019 or 2022)


Step 3.

Run the project with the Button and setting shown in the picture below

![](https://i.imgur.com/2i8RgI7.png)

<pre>





























</pre>
Theo Notes:

in packagemananger to update migration to new model : 
```
dotnet ef migrations add MyName --context MyDbContext
```
in packagemananger to update database after migration: 
```
dotnet ef database update --context MyDbContext
```
```
dotnet ef database update --context ApplicationDbContext
```
```
dotnet ef database update --context ProductDbContext
```

