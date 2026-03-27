from django.test import TestCase
from django.contrib.auth import get_user_model
from .models import Team, Activity, Leaderboard, Workout

User = get_user_model()

class ModelTests(TestCase):
    def test_team_creation(self):
        team = Team.objects.create(name='Test Team')
        self.assertEqual(str(team), 'Test Team')

    def test_activity_creation(self):
        activity = Activity.objects.create(user='test', activity_type='run', duration=10, team='Test Team')
        self.assertEqual(str(activity), 'test - run')

    def test_leaderboard_creation(self):
        lb = Leaderboard.objects.create(user='test', points=100, team='Test Team')
        self.assertEqual(str(lb), 'test - 100')

    def test_workout_creation(self):
        workout = Workout.objects.create(name='Test Workout', description='desc', difficulty='Easy')
        self.assertEqual(str(workout), 'Test Workout')
