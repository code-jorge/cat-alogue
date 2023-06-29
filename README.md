## Cat-alogue

😎 Using **Module Federation**.
Comes from `create-mf-app`

### Important checks

Both subprojects `/app` and `components` must be deployed together and be linked with one another.

They both must successfully build with webpack (using `npm run build`). Once they build, the output will all go to a folder called `/dist`, which is what must be used in **production**.