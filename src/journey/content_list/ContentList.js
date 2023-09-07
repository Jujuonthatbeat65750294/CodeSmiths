import React, { useEffect } from 'react';
import $ from 'jquery';
import './ContentList.scss';

const ContentList = () => {
  useEffect(() => {
    $(document).ready(function() {
      const levelsData = {
        levels: [
          {
            name: 'Level 1',
            difficulty: 4,
            width: 8,
            height: 8,
          },
          {
            name: 'Level 2',
            difficulty: 3,
            width: 10,
            height: 10,
          },
          {
            name: 'Level 3',
            difficulty: 2,
            width: 12,
            height: 12,
          },
          {
            name: 'Level 4',
            difficulty: 1,
            width: 14,
            height: 14,
          },
        ],
      };

      function setupLevelsScreen(data) {
        $('<ul class="levels-list">').appendTo($('#levels-screen'));

        $.each(data.levels, function(i) {
          var level = $(this);
          var name = level[0].name;
          var difficulty = level[0].difficulty;
          var difficultyEnglish = '';

          switch (difficulty) {
            case 4:
              difficultyEnglish = 'easy';
              break;
            case 3:
              difficultyEnglish = 'medium';
              break;
            case 2:
              difficultyEnglish = 'hard';
              break;
            case 1:
              difficultyEnglish = 'insane';
              break;
          }

          $('<li id="level-' + name + '" class="level locked-level">')
            .addClass(difficultyEnglish)
            .appendTo($('.levels-list'))
            .html('<i class="fa fa-lock"></i>')
            .attr('data-name', name)
            .attr('data-difficulty', difficulty)
            .attr('data-width', level[0].width)
            .attr('data-height', level[0].height);
        });

        $('.level:first').removeClass('locked-level');
        $('.level:first').addClass('unlocked-level');

        // Change the text on the face of the unlocked levels
        $('.unlocked-level').each(function() {
          var name = $(this).data('name');
          $(this).text(name);
        });
      }

      setupLevelsScreen(levelsData);
    });
  }, []);

  return (
    <div id="levels-screen">
      <h1 className="title">Levels</h1>
    </div>
  );
};

export default ContentList;