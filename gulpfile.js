var gulp = require('gulp');
var eslint = require('gulp-eslint');
var istanbul = require('gulp-istanbul');
var jasmine = require('gulp-jasmine');
var reporters =require('jasmine-reporters')
var fs = require('fs');

gulp.task('lint',()=>{
    return gulp.src(['**/*.js','!node_modules/**'])
    .pipe(eslint({fix:true}))
    .pipe(eslint.format())
    .pipe(eslint.format('html',fs.createWriteStream('lintReports/lint_report.html')))
.pipe(eslint.format('checkstyle',
fs.createWriteStream('lintReports/checkstyle.xml')))
.pipe(eslint.failAfterError());
})
gulp.task('test', () => {
  return gulp.src(['spec/*.js'])
      // gulp-jasmine works on filepaths so you can't have any plugins before it
      .pipe(jasmine({
        reporter: new reporters.JUnitXmlReporter({
            savePath: 'testReport/JUnit/'
        })}))
        // .pipe(exit())
});


gulp.task('pre-coverage', function () {
  return gulp.src(['**/*.js', '!gulpfile.js', '!node_modules/**'])
    // Covering files
    .pipe(istanbul())
    // Force `require` to return covered files
    .pipe(istanbul.hookRequire());
});

  gulp.task('coverage', gulp.series('pre-coverage', function(){  //change here
    return gulp.src(['spec/*.js'])
    .pipe(jasmine())
    // Creating the reports after tests ran
    .pipe(istanbul.writeReports({
      dir: './coverage',
      reporters: [ 'lcovonly', 'json', 'text', 'text-summary', 'cobertura' ],
      reportOpts: {
        lcov: {dir: 'coverage/lcovonly', file: 'lcov.info'},
        json: {dir: 'coverage/json', file: 'converage.json'},
        cobertura: {dir: 'coverage/cobertura', file: 'cobertura-coverage.xml'}
      }}))
    // Enforce a coverage of at least 60%
    .pipe(istanbul.enforceThresholds({ thresholds: { global: 60 } }))
  }) 
  )





// var gulp = require('gulp');

// var eslint = require('gulp-eslint');

// var istanbul = require('gulp-istanbul');

// var jasmine = require('gulp-jasmine');

// var reporters=require('jasmine-reporters')



// var fs = require('fs');



// gulp.task('lint',()=>{

//     return gulp.src(['**/*.js','!node_modules/**'])

//     .pipe(eslint({fix:true}))

//     .pipe(eslint.format())

//     .pipe(eslint.format('html',fs.createWriteStream

// ('lintReports/lint_report.html')))

// .pipe(eslint.format('checkstyle',

// fs.createWriteStream('lintReports/checkstyle.xml')))

// .pipe(eslint.failAfterError());

// })

// gulp.task('test', () => {

//   return gulp.src(['spec/*.js'])

//       // gulp-jasmine works on filepaths so you can't have any plugins before it

//       .pipe(jasmine({

//         reporter: new reporters.JUnitXmlReporter({

//             savePath:'testReport/JUnit/'

//         })}))

//         // .pipe(exit())

// });





// gulp.task('pre-coverage', function () {

//   return gulp.src(['**/*.js', '!gulpfile.js', '!node_modules/**'])

//     // Covering files

//     .pipe(istanbul())

//     // Force `require` to return covered files

//     .pipe(istanbul.hookRequire());

// });



//   gulp.task('coverage', gulp.series('pre-coverage', function(){  //change here

//     return gulp.src(['spec/*.js'])

//     .pipe(jasmine())

//     // Creating the reports after tests ran

//     .pipe(istanbul.writeReports({

//       dir: './coverage',

//       reporters: [ 'lcovonly', 'json', 'text', 'text-summary', 'cobertura' ],

//       reportOpts: {

//         lcov: {dir: 'coverage/lcovonly', file: 'lcov.info'},

//         json: {dir: 'coverage/json', file: 'converage.json'},

//         cobertura: {dir: 'coverage/cobertura', file: 'cobertura-coverage.xml'}

//       }}))

//     // Enforce a coverage of at least 60%

//     .pipe(istanbul.enforceThresholds({ thresholds: { global: 60 } }))

//   }) 

//   )
